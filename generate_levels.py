from copy import deepcopy

import hashlib
import json
import random
import sys

LEVEL_WIDTH  = 12
LEVEL_HEIGHT = 15

def hash_id(level):
    data = '.'.join(['.'.join(str(r)) for r in level])

    return hashlib.md5(data).hexdigest()

def pick_direction(da):
    weighted_choices = ['N'] * da[0] + ['E'] * da[1] + ['S'] * da[2] + ['W'] * da[3]

    if len(weighted_choices) == 0:
        return None

    return random.choice(weighted_choices)

def pick_length(cur_row, cur_col, direction):
    max_length = 1

    if direction == 'N':
        max_length = cur_row
    elif direction == 'S':
        max_length = LEVEL_HEIGHT - cur_row - 2
    elif direction == 'E':
        max_length = LEVEL_WIDTH - cur_col - 1
    elif direction == 'W':
        max_length = cur_col

    if max_length <= 1:
        return 0

    #print direction, max_length

    return random.randint(1, max_length)

def is_clean(level):
    # the level needs to have at least 20 steps
    max_right_col = max([n[-1] for n in level])

    if max_right_col > 1 and max_right_col < 20:
        return False

    # no squares
    for ix, row in enumerate(level):
        if ix >= len(level) - 1:
            continue

        for iy, col in enumerate(row):
            if iy >= len(row) - 1:
                continue

            neighbors = (
                0 if col == 0 else 1,
                0 if row[iy + 1] == 0 else 1,
                0 if level[ix + 1][iy] == 0 else 1,
                0 if level[ix + 1][iy + 1] == 0 else 1
            )

            if sum(neighbors) == 4:
                return False
            
    return True

def gen_level(width, height):
    level_data = []

    # prepop with blank tiles
    for a in xrange(0, height):
        level_data.append([0] * width)

    # randomly pick a starting position on the bottom row
    cur_row = LEVEL_HEIGHT - 1
    cur_col = random.randint(0, LEVEL_WIDTH - 2)

    cur_step = 1

    level_data[cur_row][cur_col] = cur_step

    # always go up from the first step
    cur_row -= 1
    cur_step += 1
    level_data[cur_row][cur_col] = cur_step

    # let's not go back down...
    direction_availability = (1, 1, 0, 1) # N E S W
    undo = []
    retry_count = 0

    while cur_col != LEVEL_WIDTH - 1:
        stomps = 0

        # pick a direction
        direction = pick_direction(direction_availability)

        if direction == None:
            return

        # pick a line length
        length = pick_length(cur_row, cur_col, direction)

        if length == 0:
            continue

        # cheap undo
        undo.append({
            'undo_level_data': deepcopy(level_data),
            'undo_cur_step': cur_step,
            'undo_cur_row': cur_row,
            'undo_cur_col': cur_col,
        })

        for c in xrange(0, length):
            cur_step += 1

            if direction == 'N':
                cur_row -= 1
            elif direction == 'S':
                cur_row += 1
            elif direction == 'E':
                cur_col += 1
            elif direction == 'W':
                cur_col -= 1

            if level_data[cur_row][cur_col] == 0:
                level_data[cur_row][cur_col] = cur_step
            else:
                cur_step -= 1
                stomps += 1

            if stomps >= 2:
                break

        if is_clean(level_data) == False or stomps > 1 or level_data[cur_row][cur_col] != cur_step:
            retry_count += 1
            numpops = 1

            if retry_count > 10:
                numpops = int(retry_count / 10 + 1)

            undo_data = {}

            for x in xrange(0, numpops):

                if len(undo) > 0:
                    undo_data = undo.pop()

            level_data = deepcopy(undo_data['undo_level_data'])
            cur_step = undo_data['undo_cur_step']
            cur_row = undo_data['undo_cur_row']
            cur_col = undo_data['undo_cur_col']

            continue

        # reset the directions
        direction_availability = (direction != 'S', direction != 'W', direction != 'N', direction != 'E')

        retry_count = 0
    
    return {
        'data': level_data,
        'max_no': cur_step,
        'max_time': cur_step / 10.0,
        'hash_id': hash_id(level_data),
    }

def print_level(level):
    for r in level:
        sys.stdout.write('    [')
        for i, c in enumerate(r):
            if i != 0:
                sys.stdout.write(',')

            sys.stdout.write('{}'.format(c).rjust(3))
        sys.stdout.write('],')
        sys.stdout.write('\n')

if __name__ == '__main__':
    levels = []

    for x in xrange(1, 299):
        levels.append(gen_level(LEVEL_WIDTH, LEVEL_HEIGHT))

    sorted_levels = sorted(levels, key=lambda level: level['max_no'])

    print "window.mazes = ["
    for x, level in enumerate(sorted_levels):
        if x != 0:
            print ","

        print "{'data': ["
        print_level(level['data'])
        print "], 'max_no': {}, 'max_time': {}, 'hash_id': '{}'}}".format(level['max_no'], level['max_time'], level['hash_id'])
    print "];"
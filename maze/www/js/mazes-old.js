/*

{'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 0, 'max_time': 1.00}

*/

window.mazes = [
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,11,12,13,14,15,16],
      [0 ,0 ,0 ,0 ,0 ,0 ,10,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,9 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,8 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,7 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,6 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,5 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,4 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,3 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 16, 'max_time': 1.00}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,17,18,19,20,21],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,16,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,15,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,14,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,10,11,12,13,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,9 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,7 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,5 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,3 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 21, 'max_time': 2.25}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,22,23],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,18,19,20,21,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,17,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,16,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,15,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,12,13,14,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,11,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,10,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,9 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,7 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,3 ,4 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 23, 'max_time': 2.40}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,29,30],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,28,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,27,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,26,0 ],
      [0 ,10,11,12,13,14,15,16,0 ,0 ,25,0 ],
      [0 ,9 ,0 ,0 ,0 ,0 ,0 ,17,0 ,0 ,24,0 ],
      [0 ,8 ,0 ,0 ,0 ,0 ,0 ,18,0 ,0 ,23,0 ],
      [0 ,7 ,6 ,0 ,0 ,0 ,0 ,19,20,21,22,0 ],
      [0 ,0 ,5 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,2 ,3 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 30, 'max_time': 2.65}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,12,13,14,15,16,17,18,19,20,0 ,0 ],
      [0 ,11,0 ,0 ,0 ,0 ,0 ,0 ,0 ,21,0 ,0 ],
      [0 ,10,0 ,0 ,0 ,0 ,0 ,0 ,0 ,22,0 ,0 ],
      [0 ,9 ,0 ,0 ,36,37,38,0 ,0 ,23,0 ,0 ],
      [0 ,8 ,0 ,0 ,35,0 ,39,0 ,0 ,24,0 ,0 ],
      [0 ,7 ,0 ,0 ,34,0 ,40,0 ,0 ,25,0 ,0 ],
      [0 ,6 ,0 ,0 ,33,0 ,0 ,0 ,0 ,26,0 ,0 ],
      [0 ,5 ,0 ,0 ,32,31,30,29,28,27,0 ,0 ],
      [0 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,3 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 40, 'max_time': 3.80}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,13,14,15,0 ,0 ,0 ,0 ,0 ,53,54,55],
      [0 ,12,0 ,16,0 ,0 ,0 ,0 ,0 ,52,0 ,0 ],
      [0 ,11,0 ,17,0 ,35,36,37,0 ,51,0 ,0 ],
      [0 ,10,0 ,18,0 ,34,0 ,38,0 ,50,0 ,0 ],
      [0 ,9 ,0 ,19,0 ,33,0 ,39,0 ,49,0 ,0 ],
      [0 ,8 ,0 ,20,0 ,32,0 ,40,0 ,48,0 ,0 ],
      [0 ,7 ,0 ,21,0 ,31,0 ,41,0 ,47,0 ,0 ],
      [0 ,6 ,0 ,22,0 ,30,0 ,42,0 ,46,0 ,0 ],
      [0 ,5 ,0 ,23,0 ,29,0 ,43,44,45,0 ,0 ],
      [0 ,4 ,0 ,24,0 ,28,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,3 ,0 ,25,26,27,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 55, 'max_time': 5.00}
    ,
    {'data': [
      [33,34,35,36,37,38,39,40,41,42,43,44],
      [32,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,45],
      [31,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,46],
      [30,29,28,0 ,0 ,0 ,0 ,0 ,0 ,49,48,47],
      [0 ,0 ,27,0 ,0 ,0 ,0 ,0 ,0 ,50,0 ,0 ],
      [0 ,0 ,26,25,24,0 ,0 ,53,52,51,0 ,0 ],
      [0 ,0 ,0 ,0 ,23,0 ,0 ,54,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,22,0 ,0 ,55,0 ,0 ,0 ,0 ],
      [0 ,0 ,19,20,21,0 ,0 ,56,57,58,0 ,0 ],
      [0 ,0 ,18,0 ,0 ,0 ,0 ,0 ,0 ,59,0 ,0 ],
      [15,16,17,0 ,0 ,0 ,0 ,0 ,0 ,60,61,62],
      [14,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [13,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [12,11,10,9 ,8 ,7 ,6 ,5 ,4 ,3 ,2 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ],
    ], 'max_no': 62, 'max_time': 6.15}
    ,
    {'data': [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,16,15,14,13,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,17,0 ,0 ,12,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,18,0 ,0 ,11,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,19,0 ,0 ,10,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,20,21,22,9 ,23,24,25,26,27],
      [0 ,0 ,0 ,0 ,0 ,0 ,8 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,7 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,6 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,5 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,4 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,3 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ],
    ], 'max_no': 27, 'max_time': 2.40}
];
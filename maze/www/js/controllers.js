angular.module('maze.controllers', [])

.controller('MazeCtrl', function($rootScope, $scope, $state, $ionicHistory, $ionicPopup) {
  $scope.touchEvent = {'isTouching': false, 'coord': null};
  $scope.timer = {'time': '0.00', 'isRunning': false, 'beginTime': 0.0};
  $scope.currentBoxNumber = 0;
  $scope.currentMaze = null;
  $scope.gameOver = true;

  $scope.$on('$ionicView.enter', function(e) {
    console.log('MazeCtrl');

    setInterval($scope.timerEvent, 25);

    $scope.generateMaze();
  });

  $scope.timerEvent = function() {
    if ($scope.timer.isRunning == false) {
      return;
    }

    var d = new Date(),
      curDuration = ((d.getTime() - $scope.timer.beginTime) / 1000);

    $scope.timer.time = ($scope.currentMaze.max_time - curDuration).toFixed(2);

    if ($scope.timer.time <= 0) {
      $scope.gameOver = true;
      $scope.timer.time = '0.00';
      $scope.stopTimer();
    }

    $scope.$apply();

    if ($scope.gameOver == true) {
      var alertPopup = $ionicPopup.alert({
        title: 'Aw man!',
        template: 'Try again.'
      });

      alertPopup.then(function(res) {
        $scope.generateMaze();
      });
    }
  }

  $scope.startTimer = function() {
    if ($scope.timer.isRunning == true) {
      return;
    }

    var d = new Date();
    $scope.timer.beginTime = d.getTime();
    $scope.timer.isRunning = true;
  }

  $scope.stopTimer = function() {
    $scope.timer.isRunning = false;
  }

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.inElement = function(coords, elementRect) {
    return coords.pageY > elementRect.top && coords.pageY < elementRect.bottom && coords.pageX > elementRect.left && coords.pageX < elementRect.right;
  }

  $scope.generateMaze = function() {
    var maze = {'data': [
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
    ], 'max_no': 21, 'max_time': 2.25};

    $scope.currentMaze = maze;
    $scope.timer.time = maze.max_time;
    $scope.gameOver = false;
    $scope.currentBoxNumber = 0;

    var mazeSize = {'width': 12, 'height': 15},
      mazeDiv = document.getElementById("lights");

    mazeDiv.innerHTML = '';

    for (var y = 0; y < mazeSize.height; y++) {

      var rowDiv = document.createElement("div");
      rowDiv.className = "row";

      for (var x = 0; x < mazeSize.width; x++) {
        var colDiv = document.createElement("div");

        colDiv.className = (maze.data[y][x] == 0) ? "dark" : "light";
        colDiv.setAttribute("boxNumber", maze.data[y][x])
        rowDiv.appendChild(colDiv);
      }

      mazeDiv.appendChild(rowDiv);
    }
  }

  $scope.touchLight = function() {
    if ($scope.gameOver == true) {
      return;
    }

    $scope.touchEvent.isTouching = true;
    $scope.startTimer();
  }

  $scope.releaseLight = function() {
    $scope.touchEvent.isTouching = false;
  }

  $scope.dragLight = function() {
    if ($scope.gameOver == true) {
      return;
    }

    $scope.touchEvent.coord = event.gesture.center;

    var ds = document.getElementsByClassName("light");

    for (var idx = 0; idx < ds.length; idx++) {
      var d = ds[idx].getBoundingClientRect();

      if ($scope.inElement($scope.touchEvent.coord, d) == true) {
        var boxNumber = ds[idx].getAttribute("boxNumber");

        if (boxNumber > 0 && boxNumber == $scope.currentBoxNumber + 1) {
          ds[idx].className = 'activated';
          $scope.currentBoxNumber += 1;

          if (boxNumber >= $scope.currentMaze.max_no) {
            $scope.stopTimer();

            var alertPopup = $ionicPopup.alert({
              title: 'Nice!',
              template: 'Good job.'
            });

            alertPopup.then(function(res) {
              $scope.generateMaze();
            });
          }
        }
      }
    }
  }
})
angular.module('maze.controllers', [])

.controller('MazeCtrl', function($rootScope, $scope, $state, $ionicHistory) {
  $scope.$on('$ionicView.enter', function(e) {
    console.log('MazeCtrl');
  });

  $scope.goBack = function() {
    $ionicHistory.goBack();
  }

  $scope.generateMaze = function() {
    
  }

  $scope.touchLight = function() {
    console.log('ah!');
  }
})
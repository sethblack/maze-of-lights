angular.module('maze', ['ionic','ionic.service.core', 'ionic.service.analytics', 'maze.controllers'])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {
    $ionicAnalytics.register();

    if (!('mazes' in window.localStorage)) {
      window.localStorage['mazes'] = JSON.stringify({});
    }

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/maze',
    templateUrl: "templates/maze.html",
    controller: 'MazeCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/maze');

});
'use strict';

/* App Module */

angular.module('tradeRoutesApp', 
  [
    'ngRoute',
    'ngSanitize',
    'phonecatAnimations',
    'mainCtrl',
    'phonecatFilters',
    'phonecatServices'
  ]
)

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

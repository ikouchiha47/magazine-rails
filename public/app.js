'use strict';

(function() {
  angular.module('magAzine', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .when('/articles', {
          templateUrl: 'views/articles.html',
          controller: 'ArticlesController'
        })
        .when('/events', {
          templateUrl: 'views/events.html',
          controller: 'EventsController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
}());

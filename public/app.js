'use strict';

(function() {
  angular.module('magAzine', ['ngRoute', 'ngResource', 'restangular'])
    .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
      //dealing with Restangular
      RestangularProvider.setBaseUrl('/api/v1');

      // routes
      $routeProvider.
        when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .when('/articles', {
          templateUrl: 'views/articles/index.html',
          controller: 'ArticlesIndexController'
        })
        .when('/articles/new', {
          templateUrl: 'views/articles/new.html',
          controller: 'ArticlesNewController'
        })
        .when('/articles/:id', {
          templateUrl: 'views/articles/show.html',
          controller: 'ArticlesShowController'
        })
        .when('/events', {
          templateUrl: 'views/articles/index.html',
          controller: 'EventsIndexController'
        })
        .when('/events/:id', {
          templateUrl: 'views/articles/show.html',
          controller: 'EventsShowController'
        })
        .when('/event/new', {
          templateUrl: 'views/articles/new.html',
          controller: 'EventsNewController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
}());

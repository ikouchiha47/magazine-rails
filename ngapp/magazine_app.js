'use strict';

angular
  .module('magazine', [
    'ngRoute',
    'ngResource',
    'restangular',
    'templates'
  ]).
  config(config)

function config($routeProvider, $locationProvider, RestangularProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  RestangularProvider.setBaseUrl('/api/v1');

  $routeProvider.
    when('/ng', {
      templateUrl: 'index.html',
      controller: 'HomeController'
    })
    .when('/ng/articles', {
      templateUrl: 'articles/index.html',
      controller: 'ArticlesIndexController'
    })
    .when('/ng/articles/new', {
      templateUrl: 'articles/new.html',
      controller: 'ArticlesNewController'
    })
    .when('/ng/articles/:id', {
      templateUrl: 'articles/show.html',
      controller: 'ArticlesShowController'
    })
    .when('/ng/events', {
      templateUrl: 'views/events/index.html',
      controller: 'EventsIndexController'
    })
    .when('/ng/events/:id', {
      templateUrl: 'views/events/show.html',
      controller: 'EventsShowController'
    })
    .when('/ng/event/new', {
      templateUrl: 'views/events/new.html',
      controller: 'EventsNewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}

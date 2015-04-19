angular.module('magAzine', ['ngRoute', 'ngResource', 'restangular'])
  .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
  //dealing with Restangular
  RestangularProvider.setBaseUrl('/api/v1');

  // routes
  $routeProvider.
    when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
    })
    .when('/articles', {
        templateUrl: 'app/views/articles/index.html',
        controller: 'ArticlesIndexController'
    })
    .when('/articles/new', {
        templateUrl: 'app/views/articles/new.html',
        controller: 'ArticlesNewController'
    })
    .when('/articles/:id', {
        templateUrl: 'app/views/articles/show.html',
        controller: 'ArticlesShowController'
    })
    .when('/events', {
        templateUrl: 'app/views/articles/index.html',
        controller: 'EventsIndexController'
    })
    .when('/events/:id', {
        templateUrl: 'app/views/articles/show.html',
        controller: 'EventsShowController'
    })
    .when('/event/new', {
        templateUrl: 'app/views/articles/new.html',
        controller: 'EventsNewController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

'use strict';

(function() {
  angular.module('magAzine')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$scope', '$routeParams', 'Article'];

  /** Article Controller */
  function ArticlesController( $scope, $routeParams, Article ){
    $scope.articles = {};

    Article.query(function(data) {
      $scope.articles = data.articles;
    });
  }
}())

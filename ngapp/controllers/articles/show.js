'use strict';

(function() {
  angular
    .module('magazine')
    .controller('ArticlesShowController', ArticlesShowCtrl);

  ArticlesShowCtrl.$inject = ['$scope', '$routeParams', 'Article'];

  /** Articles Show */
  function ArticlesShowCtrl( $scope, $routeParams, Article ) {
    $scope.article  = {};

    Article.show($routeParams.id).then(function(data) {
      $scope.article = data.article;
    });
  }
}());

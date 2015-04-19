(function() {
	'use strict';

  angular.module('magAzine')
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
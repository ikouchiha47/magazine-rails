(function() {
	'use strict';

  angular.module('magAzine')
    .controller('ArticlesIndexController', ArticlesIndexCtrl);

  ArticlesIndexCtrl.$inject = ['$scope', 'Article'];

  /** Articles Index */
  function ArticlesIndexCtrl( $scope, Article ) {
    $scope.articles = {};

    Article.all().then(function(data) {
      $scope.articles = data;
    });
  }
}());

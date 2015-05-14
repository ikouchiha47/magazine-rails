'use strict';

(function() {
  angular
    .module('magazine')
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

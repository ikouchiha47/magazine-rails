'use strict';

(function() {
  angular.module('magazine')
    .controller('ArticlesNewController', ArticlesNewCtrl);

  ArticlesNewCtrl.$inject = ['$scope', 'Article'];

  /** Articles New */
  function ArticlesNewCtrl( $scope, Article ) {
    $scope.article  = {
      form: {
        name: '',
        content: ''
      }
    };

    $scope.response = {};

    $scope.article.create = function() {
      Article.create($scope.article.form).then(function(data) {
        $scope.article.form.name = "";
        $scope.article.form.content = "";
        $scope.response = data;
      }, function(error) {
        $scope.response = error.data;
      });
    };
  }
}());

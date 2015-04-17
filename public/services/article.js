'use strict';

(function() {
  angular.module('magAzine')
    .factory('Article', Article);

  Article.$inject = ['Restangular'];

  function Article( Restangular ) {
    var articles = Restangular.all('articles')
    , getArticles = function() {
      return articles.getList();
    }
    , getArticle = function(id) {
      return articles.get(id);
    }
    , createArticle = function(formObj) {
      console.log(formObj)
      return articles.post(formObj)
    }
    , updateArticle = function(formObj) {
      article.get(id).patch(formObj)
    };

    return {
      all:  getArticles,
      show:   getArticle,
      create: createArticle,
      update: updateArticle
    };
  }
}());

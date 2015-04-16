'use strict';

(function() {
  angular.module('magAzine')
    .factory('Article', Article);

  Article.$inject = ['$resource'];

  function Article( $resource ) {
    return $resource('/articles.json',
                     {},
                     {
                       query: {
                         method: 'GET'
                       }
                     }
                    );
  };
}());

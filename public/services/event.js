'use strict';

(function() {
  angular.module('magAzine')
    .factory('Event', Event);

  Event.$inject = ['$resource'];

  function Event( $resource ) {
    return $resource('/events.json',
                     {},
                     {
                       query: {
                         method: 'GET'
                       }
                     }
                    );
  };
}());

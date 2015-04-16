'use strict';

(function() {
  angular.module('magAzine')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['$scope', '$routeParams', 'Event'];

  /** Events Controller */
  function EventsController( $scope, $routeParams, Event ){
    $scope.events = {};

    Event.query(function(data) {
      $scope.events = data.events;
    });
  }
}());

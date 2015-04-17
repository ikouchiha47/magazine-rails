'use strict';

(function() {
  angular.module('magAzine')
    .controller('EventsShowController', EventsShowCtrl);

  EventsShowCtrl.$inject = ['$scope', '$routeParams', 'Event'];

  /** Events Show */
  function EventsShowCtrl( $scope, $routeParams, Event ) {
    $scope.event  = {};

    Event.show($routeParams.id).then(function(data) {
      $scope.event = data.event;
    });
  }
}());

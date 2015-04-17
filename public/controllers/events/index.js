'use strict';

(function() {
  angular.module('magAzine')
    .controller('EventsIndexController', EventsIndexCtrl);

  EventsIndexCtrl.$inject = ['$scope', 'Event'];

  /** Events Index */
  function EventsIndexCtrl( $scope, Event ) {
    $scope.events = {};

    Event.all().then(function(data) {
      $scope.events = data;
    });
  }
}());

(function() {
	'use strict';

  angular.module('magAzine')
    .controller('EventsNewController', EventsNewCtrl);

  EventsNewCtrl.$inject = ['$scope', 'Event'];

  /** Events New */
  function EventsNewCtrl( $scope, Event ) {
    $scope.form  = {};
    Event.create($scope.form).then(function(data) {
      $scope.form.response = data.response;
    });
  }
}());

(function() {
  'use strict';
  angular.module('magAzine')
    .factory('Event', Event);

  Event.$inject = ['Restangular'];

  function Event( Restangular ) {
    var events = Restangular.all('events')
    , getEvents = function() {
      return events.getList();
    }
    , getEvent = function(id) {
      return events.get(id);
    }
    , createEvent = function(formObj) {
      return events.post(formObj);
    }
    , updateEvent = function(formObj) {
      return events.get(id).patch(formObj);
    };

    return {
      all:  getEvents,
      show:   getEvent,
      create: createEvent,
      update: updateEvent
    };
  }
}());

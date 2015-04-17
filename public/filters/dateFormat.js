'use strict';

(function() {
  angular.module('magAzine')
    .filter('formatDate', formatDate);

  formatDate.$inject = ['$filter'];

  function formatDate($filter) {
    return function(input) {
      if(input)
        return $filter('date')(new Date(input), 'dd-MMM-yyyy');
    else
      return "";
    }
  }
}());

// 1. Write an IIFE
// 2. Create/Access your module
// 3. $inject
// 4. Named function and write the function
// 5. Connect in app.js
// 6. connect in index.html

(function() {
  'use strict';

  angular.module('cardDrawApp.components.hand')
    .directive('cdHand', HandDirective);

    HandDirective.$inject = [];

    function HandDirective() {
      return {
        scope: {},
        restrict: 'E',
        controller: 'HandController',
        controllerAs: 'vm',
        templateUrl: './js/components/hand/hand.html'
      };
    }
}());

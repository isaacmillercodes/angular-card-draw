(function() {
  'use strict';

  angular.module('cardDrawApp.components.deck')
    .directive('cdDeck', DeckDirective);

    DeckDirective.$inject = [];

    function DeckDirective() {
      return {
        restrict: 'E',
        controller: 'DeckController',
        controllerAs: 'vm',
        templateUrl: './js/components/deck/deck.html'
      };
    }
}());

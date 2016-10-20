(function() {
  'use strict';
  angular.module('cardDrawApp.components.deck')
    .controller('DeckController', DeckController);

  DeckController.$inject = ['HandService'];

  function DeckController (HandService) {
    console.log('%c Loading deck controller ', 'background: #222; color: #bada55');

    this.draw = () => HandService.draw();
  }
}());

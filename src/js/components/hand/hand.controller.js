// 1. Write an IIFE
// 2. Create/Access your module
// 3. $inject
// 4. Named function and write the function
// 5. Connect in app.js
// 6. connect in index.html

(function() {
  'use strict';
  angular.module('cardDrawApp.components.hand')
    .controller('HandController', HandController);

  HandController.$inject = ['HandService'];

  function HandController (HandService) {
    this.hand = HandService.hand;
    HandService.draw();
  }
}());

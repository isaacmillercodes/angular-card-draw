// sample angular code

(function() {

  'use strict';

  angular
    .module('cardDrawApp', [
      'cardDrawApp.config',
      'cardDrawApp.components.hand',
      'cardDrawApp.components.deck'
    ]);

})();

(function () {
  'use strict';

  angular.module('cardDrawApp.components.hand')
    .service('HandService', HandService);

  HandService.$inject = ['$http'];

  const baseUrl = 'https://deckofcardsapi.com/api/deck';
  const newDeckPath = '/new/draw/?count=52';

  function HandService ($http) {
    this.deck = [];
    this.hand = [];

    this.draw = () => {
      if (!this.deck.length) {
        return $http.get(baseUrl + newDeckPath)
        .then(({ data: { cards }}) => {
          this.deck = cards;
          drawACard.call(this);
        });
      } else {
        drawACard.call(this);
      }

    };

    function drawACard () {

      let selectedCard = this.deck.pop();
      this.hand.push(selectedCard);

      console.log(this.deck.length, this.hand);

    }

  }
})();

// my version

// let newDeckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
//
// $http.get(newDeckUrl)
//   .then(deck => {
//     console.log(deck);
//     let deckID = deck.data.deck_id;
//     let drawAllCardsUrl = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`;
//
//     $http.get(drawAllCardsUrl)
//       .then(cardInfo => {
//         console.log(cardInfo);
//         let allCards = cardInfo.data.cards;
//         console.log(allCards);
//         return allCards;
//       });
//
//   });

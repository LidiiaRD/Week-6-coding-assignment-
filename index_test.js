var expect = chai.expect

describe('shuffle', function () {
   it('Should return an array of 52 cards', function () {
      let shuffledDeck = new Deck()
      shuffledDeck.shuffle()
      console.log(shuffledDeck);
      expect(shuffledDeck.deck.length).to.equal(52);
   });
});

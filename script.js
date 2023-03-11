// Create arrays of Card suites & values
const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', "Jack", "Queen", "King", "Ace"];

// Create class Desk
class Deck {
   constructor() {
      this.deck = [];
      for (const suit of suits) {
         for (const value of values) {
            this.deck.push({ suit, value });
         }
      }
   }

   // Create Shuffle function with randomly generated card numbers
   shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
   }
}
// Create Desk instance & call shuffle function on created Desk instance
const deck = new Deck();
deck.shuffle()

// Deal 26 cards to 2 Players from a Deck
const playerOne = [];
const playerTwo = [];
for (let i = 0; i < 26; i++) {
   playerOne.push(deck.deck[i]);
   playerTwo.push(deck.deck[i + 26]);
}

// Create var for score
let playerOneScore = 0;
let playerTwoScore = 0;

//Iterate through turns, compare cards value & validate score
while (playerOne.length > 0 && playerTwo.length > 0) {
   let playerOneCard = playerOne.shift();
   let playerTwoCard = playerTwo.shift();

   if (values.indexOf(playerOneCard.value) > values.indexOf(playerTwoCard.value)) {
      playerOneScore++;
   } else if (values.indexOf(playerOneCard.value) < values.indexOf(playerTwoCard.value)) {
      playerTwoScore++;
   }
}

//Display scores snd the winner
console.log(`Player One scored: ${playerOneScore} points`);
console.log(`Player Two scored: ${playerTwoScore} points`);
if (playerOneScore > playerTwoScore) {
   console.log("Player One Wins!");
} else if (playerOneScore < playerTwoScore) {
   console.log("Player Two Wins!");
} else {
   console.log("It is a tie!");
}














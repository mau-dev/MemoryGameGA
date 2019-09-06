
alert('Hello, friends.');

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];


var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);

    checkForMatch();
};

flipCard(0);
flipCard(2);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
console.log(cardsInPlay);

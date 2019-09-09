// the cards in an array of objects
var cards = [
   { 

  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"

  },
   { 

  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png"

  },
   { 

  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"

  },
  { 

  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"

  }
];
// an cardsInPlay stores the cards in play, plays tracks number of plays, score tracks the score
var cardsInPlay = [];
var plays = 0;
var score = 0;

// if user flipped 2 cards, plays will be incremented by 1, if check for match is true score will be incremented by 150
function checkForMatch() { 
	if(cardsInPlay.length === 2) {
		// add something later to disable flipping after this condition is true
		plays += 1; 
		document.getElementById('plays-value').innerHTML = plays;
        console.log("plays" + plays);
        if (cardsInPlay[0] === cardsInPlay[1]) {
                score += 150; 
                document.getElementById('score-value').innerHTML = score;
                console.log("score" + score);
                window.alert("You found a match!");
                } else {
                window.alert("Sorry, try again.");
				}
            }
        }
// function to console what is flipped and to store the card rank in the cardsInPlay array
// added setTimeout to fire checkForMatch later, so it'wont alert before both cards are fliped on front img
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);

    if(cardsInPlay.length === 2) {
    	setTimeout(checkForMatch, 500) 
    }
};
// create a new game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}	
}
var resetGame = function() {
    while(cardsInPlay.length > 0) {
    	cardsInPlay.pop();
    	console.log(cardsInPlay);
    }
     resetCard = document.getElementsByTagName("img");    
    for(i=0; i<resetCard.length; i++){
      resetCard[i].setAttribute("src", "images/back.png");
    }
 // alert("new game");
}

createBoard();

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);
console.log(cardsInPlay);



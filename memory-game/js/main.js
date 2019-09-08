
// alert('Hello, friends.');

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

// create a new game board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard)

        document.getElementById('game-board').appendChild(cardElement);


	}
}


// an array to store the cards in play

var cardsInPlay = [];


// function to check if the flipped cards match after ensurenig there are two cards flipped

function checkForMatch() { 
 if (cardsInPlay[0] === cardsInPlay[1]) {
                window.alert("You found a match!");
                } else {
                window.alert("Sorry, try again.");
				}
            }

// function to console what is flipped and to store the card rank in the cardsInPlay array

var flipCard = function () {

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);

    cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);

    

    if(cardsInPlay.length === 2) {
    	return checkForMatch();
    }
    

    

    
};

createBoard();



console.log(cardsInPlay);






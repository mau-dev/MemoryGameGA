
alert('Hello, friends.');

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

// an array to store the cards in play

var cardsInPlay = [];


// function to check if the flipped cards match after ensurenig there are two cards flipped

function checkForMatch() { 
 	if (cardsInPlay.length === 2) {
 		  if (cardsInPlay[0] === cardsInPlay[1]) {
                alert("You found a match!");
                } else {
                alert("Sorry, try again.");
				}
            }
 }


// function to console what is flipped and to store the card rank in the cardsInPlay array

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].suit);
    console.log(cards[cardId].cardImage);
    

    checkForMatch();

    
};

flipCard(0);
flipCard(2);



console.log(cardsInPlay);






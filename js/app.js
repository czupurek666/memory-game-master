/*
 * Create a list that holds all of your cards
 */

//  creates an empty array of cards to be suffled
const cards = [];

//  get a list of <i> elements whose immediate parent element has the class "card"
//  see dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const allCards = document.querySelectorAll('.card > i');

// TODO fills the array cards with the class names of i elements
for (let i= 0; i<allCards.length; i++ ){
  const singleCardClassName = allCards[i].className;
  cards.push(singleCardClassName);
}

 //checking if the card array ist filled with the wright information
/*
const myPara = document.createElement('i');
myPara.className = "fa fa-diamond";
myPara.textContent = ('cards:'+ cards) ;
document.body.appendChild(myPara);
*/

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// displayCards function
// loop through each card and create its HTML
// add each card's HTML to the page

function displayCards() {
for (let i= 0; i<allCards.length; i++ ){
  allCards[i].className = cards[i];
}
};

// TODO shuffle the list of cards using the provided "shuffle" method
shuffle(cards);

//TODO loop through each card and create its HTML
//TODO add each card's HTML to the page
displayCards();


//checking if the card array ist shuffled
/*
const myPara2 = document.createElement('i');
myPara2.textContent = ('shuffled:'+ cards) ;
document.body.appendChild(myPara2);
*/

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

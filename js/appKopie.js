
//  creates an empty array of cards to be suffled
const cards = [];
//  creates an empty array of cards that are oppened
const openCardsClass= [];

//  get a list of <i> elements whose immediate parent element has the class "card"
//  see dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const allCards = document.querySelectorAll('.card > i');
//const openedCard = document.querySelectorAll('.show > i');
const openedCard = document.querySelectorAll('.show > i');

/*
* @description changing a list of cards into array of card classes
* @constructor
* @param {string} crd - list of cards
* @param {array} arr - array with a clss Names
*/
function pushToArray (crd,arr){
for (let i= 0; i<crd.length; i++ ){
  const singleCardClassName = crd[i].className;
  arr.push(singleCardClassName);
}
return arr;
};

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
};

/*
* @description loop through each card and create its HTML
* @description add each card's HTML to the page
*/
function displayBlankCards() {
for (let i= 0; i<allCards.length; i++ ){
  allCards[i].className = cards[i];
}
};

function cardSymbolDisplay(evt){
if (evt.target.className === 'card'){
  evt.target.className = 'card open show';
}
};

function openedCardPushToArray (evt){
  const cd = evt.target.firstElementChild;
    if (evt.target.className != 'deck'){
      const cdClassName = cd.className;
      openCardsClass.push(cdClassName);
    }
};

function cardDisplay(evt) {
  //display the card's symbol (put this functionality in another function that you call from this one)
  cardSymbolDisplay(evt);
  //add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  // TODO fills the array  with the class names of opened cards
  openedCardPushToArray (evt);

  // if the list already has another card, check to see if the two cards match 
  //if the list already has another card, check to see if the two cards match
// if (openCardsClass.length>0){
//    alert('ok');
//  }
};

// TODO fills the array cards with the class names of i elements
pushToArray (allCards, cards);

// TODO shuffle the list of cards using the provided "shuffle" method
shuffle(cards);

//TODO loop through each card and create its HTML
//TODO add each card's HTML to the page
displayBlankCards();

//TODO event listener for a card. If a card is clicked:
document.getElementById('deck').addEventListener('click',cardDisplay);


/*
{} * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

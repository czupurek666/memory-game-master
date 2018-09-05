//  creates an empty array of cards to be suffled
const cards = [];
//  creates an empty array of cards that are oppened
const openCardsClass = [];
let move = 0;

//  get a list of <i> elements whose immediate parent element has the class "card"
//  see dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
const allCards = document.querySelectorAll('.card > i');
let cardsMached =0;
//const openedCard = document.querySelectorAll('.show > i');
const stars = document.querySelectorAll('.fa-star');
const timeSpan = document.querySelectorAll('.time');
let winningTrue = false;
let finnalTimme;
let finnalStarsConteiner;
let finnalStars;
let starsResultContainer;
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

// Modal from: from: https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Game

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

function cardsMatchFunction (){
    openCardsClass.length = 0;
    //lock the cards in the open position
    // .className = 'card match';
    let openedCard = document.querySelectorAll('.show'); //NodeList [ i.fa.fa-paper-plane-o, i.fa.fa-leaf ] ('.show > i')
    openedCard[0].className = 'card match';
    openedCard[1].className = 'card match';
    cardsMached ++;
};

function cardsNotMatchFunction (){
    // remove the cards from the list
    openCardsClass.length = 0;
    //alert('cards do not match');
    // hide the card's symbol
    let openedCard = document.querySelectorAll('.show'); //NodeList [ i.fa.fa-paper-plane-o, i.fa.fa-leaf ] ('.show > i')
    openedCard[0].className = 'card';
    openedCard[1].className = 'card';
};

function moveCounter (){
  move ++;
  document.getElementsByClassName('moves')[0].textContent = ('Move:'+ move);
// stars counter
  if (move >= 20 ){
    stars[2].className= 'fa fa-star-o';
      if (move >= 30 ){
        stars[1].className= 'fa fa-star-o';
          if (move >= 50 ){
            stars[0].className= 'fa fa-star-o';
          }
      }
  }
};

function resultsInModal(){
  // reading the Time and placing it in Modal
  finnalTimme = spanTime.innerHTML
  document.getElementsByClassName('resultTime')[0].textContent = (finnalTimme);
  // reading the stars result and placing it in Modal
  finnalStarsConteiner = document.querySelector('.stars');
  finnalStars = finnalStarsConteiner.querySelectorAll('i');
  starsResultContainer = document.querySelector('.resultStars');




  for (let i=0; i < finnalStars.length; i++){
    if (finnalStars[i].className === 'fa fa-star'){
      const animatedStars = document.createElement('i');
       animatedStars.className = 'fa fa-star';
       starsResultContainer.appendChild(animatedStars);
    }
  }
}


function winning(){

  if (cardsMached== 8){
    winningTrue = true;
    resultsInModal();


    //displaying the Modal:
    modal.style.display = "block"

    }
};



// timer function from: https://jsfiddle.net/Daniel_Hug/pvk6p/ autor: Daniel Hug
const spanTime = document.getElementsByClassName('time')[0];
let    seconds = 0, minutes = 0, hours = 0, t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    spanTime.textContent = ('Time: '+ (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds));

    timer();
}
function timer() {
  if(winningTrue===false){
    t = setTimeout(add, 1000);
  }
}
// end of input from: https://jsfiddle.net/Daniel_Hug/pvk6p/ autor: Daniel Hug


timer();

// starting and playing the game
function cardDisplay(evt) {
  //display the card's symbol (put this functionality in another function that you call from this one)

  cardSymbolDisplay(evt);


    //add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  // TODO fills the array  with the class names of opened cards
  openedCardPushToArray (evt);
  // if the list already has another card, check to see if the two cards match
  if (openCardsClass.length > 1){
      if(openCardsClass[0] === openCardsClass[1]){
      cardsMatchFunction ();
      }
    // if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
    // if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
    setTimeout(function() {
      cardsNotMatchFunction ();
    }, 800);
}
// increments the move counter and displays it on the page (put this functionality in another function that you call from this one)
  moveCounter ();
//   if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  winning();
}





// TODO fills the array cards with the class names of i elements
pushToArray (allCards, cards);

// TODO shuffle the list of cards using the provided "shuffle" method
shuffle(cards);

//TODO loop through each card and create its HTML
//TODO add each card's HTML to the page
displayBlankCards();

//TODO event listener for a card. If a card is clicked:
document.getElementsByClassName('deck')[0].addEventListener('click',cardDisplay);

document.getElementsByClassName('restart')[0].addEventListener('click', function(){
  location.reload();
});

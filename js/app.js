// creates an empty array of cards to be suffled
const cards = [];
// creates an empty array of cards that are oppened
const openCardsClass = [];
let move = 0;

// get a list of <i> elements whose immediate parent element has the class 'card'
// see dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
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

/**
* @description changing a list of the cards from HTML code into array of card classes
* @param {string} crd - list of cards
* @param {array} arr - array with a clss Names
**/
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

/**
* @description loop through each card and create its HTML
* @description add each card's HTML to the page
**/
function displayBlankCards() {
  for (let i= 0; i<allCards.length; i++ ){
    allCards[i].className = cards[i];
  }
};

// Modal
// Modal from: https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal from HTML
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

//Game
/**
* @description displays the symbol of a card
* @param {string} evt - clicked element -card
**/
function cardSymbolDisplay(evt){
  if (evt.target.className === 'card'){
    evt.target.className = 'card open show';
    }
};

/**
* @description class name of clicked card is placed in cdClassName array
* @param {string} evt - clicked element -card
**/
function openedCardPushToArray (evt){
  const cd = evt.target.firstElementChild;
  // User can also click on cards conteiner in this situation the class name shuldn't be changed
    if (evt.target.className !='deck'){
      if (evt.target.className !='open'){
      const cdClassName = cd.className;
      openCardsClass.push(cdClassName);
      }
    }
};

/**
* @description lock the maching cards in the open position, caunting maching cards
**/
function cardsMatchFunction (){
// remove the cards from the list of oppened cards.only two cards can be oppen in the time
  openCardsClass.length = 0;
//lock the maching cards in the open position
  let openedCard = document.querySelectorAll('.show'); //NodeList [ i.fa.fa-paper-plane-o, i.fa.fa-leaf ] ('.show > i')
  openedCard[0].className = 'card match';
  openedCard[1].className = 'card match';
// adds number of maching cards (8 is needed to win)
  cardsMached ++;
};

/**
* @description closes not maching cards
**/
function cardsNotMatchFunction (){
// remove the cards from the list of oppened cards.only two cards can be oppen in the time
  openCardsClass.length = 0;
// hide the card's symbol
  let openedCard = document.querySelectorAll('.show'); //NodeList [ i.fa.fa-paper-plane-o, i.fa.fa-leaf ] ('.show > i')
  openedCard[0].className = 'card';
  openedCard[1].className = 'card';
};

/**
* @description calculates moves made be user. determines star ranking
**/
function moveCounter (){
// adding moves made be user
  move ++;
// prints the number of moves
  document.getElementsByClassName('moves')[0].textContent = ('Move:'+ move);
// determines star ranking
// if more than 20 moves have been made the user loses one star
  if (move >= 20 ){
    stars[2].className= 'fa fa-star-o';
// if more than 30 moves have been made the user loses secound star
      if (move >= 30 ){
        stars[1].className= 'fa fa-star-o';
// if more than 50 moves have been made the user loses third star
          if (move >= 50 ){
            stars[0].className= 'fa fa-star-o';
          }
      }
  }
};

/**
* @description creates content of the Modal, winning result
**/
function resultsInModal(){
// reading the Time and placing it in Modal
  finnalTimme = spanTime.innerHTML
  document.getElementsByClassName('resultTime')[0].textContent = (finnalTimme);
// reading the stars result from span with the class stars.
  finnalStarsConteiner = document.querySelector('.stars');
//reading the stars result from i iside the span with the class stars
  finnalStars = finnalStarsConteiner.querySelectorAll('i');
// takes from HTML span with the class resultStars
  starsResultContainer = document.querySelector('.resultStars');
// placing the apropirate number of stars in the Modal
// loops through the inhalt of finnalStars node list
    for (let i=0; i < finnalStars.length; i++){
// if the class name of the finnalStars node list element has a class: fa fa-star (full star)
      if (finnalStars[i].className === 'fa fa-star'){
// creates i node
        const animatedStars = document.createElement('i');
// sets a class of the i node as fa fa-star
        animatedStars.className = 'fa fa-star';
// places i node in the HTML span with the class resultStars
        starsResultContainer.appendChild(animatedStars);
      }
    }
};

/**
* @description creates an winning condition. makes the modal visible
**/
function winning(){
// wining condition
  if (cardsMached == 8){
// changes the winningTrue bolean
    winningTrue = true;
// openes the function printing the results in Modal
    resultsInModal();
// displaying the Modal
    modal.style.display = 'block';
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

  spanTime.textContent = ('Time: '+ (hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' + (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds));

  timer();
};

function timer() {
  if(winningTrue===false){
    t = setTimeout(add, 1000);
  }
};
// end of input from: https://jsfiddle.net/Daniel_Hug/pvk6p/ autor: Daniel Hug

timer();

// starting and playing the game

/**
* @description funcion responsile for playing the game
* @param {string} evt - clicked element -card
**/
function cardDisplay(evt) {
  let timeCardShowed;
  clearTimeout(timeCardShowed);
// function displaying the card's symbol
  cardSymbolDisplay(evt);
// function adding the card to a *list* of 'open' cards
// fills the array  with the class names of opened cards
  openedCardPushToArray (evt);
// if the list already has another card, check to see if the two cards match
  if (openCardsClass.length > 1){
// if the cards do match, lock the cards in the open position
    if(openCardsClass[0] === openCardsClass[1]){
// functin that lock the cards in the open position
      cardsMatchFunction ();
    }
// if the cards do not match
// Problem: maybe is better to solve the time delay by css animation


    timeCardShowed = setTimeout(function() {
// function that remove the cards from the list and hide the card's symbol
      cardsNotMatchFunction ();
    }, 1000);
  }

// function that increments the move counter and displays it on the page
  moveCounter ();
// function that, if all cards have matched, displays a message with the final score
  winning();
};

// function that fills the array cards with the class names of i elements
pushToArray (allCards, cards);

// function that shuffle the list of cards using the provided 'shuffle' method
shuffle(cards);

// function thatloop through each card and create its HTML and
// add each card's HTML to the page
displayBlankCards();

// event listener for a card. If a card is clicked:
document.getElementsByClassName('deck')[0].addEventListener('click',cardDisplay);

// event listener for a restart
document.getElementsByClassName('restart')[0].addEventListener('click', function(){
  location.reload();
});

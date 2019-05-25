import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import data from './data'
import Game from './Game.js';
// import Clue from './Clue.js';
import DOMupdates from './DOMupdates';


let game = new Game(data);
let $clueOne = $('.clue1');
let $clueTwo = $('.clue2');
let $clueThree = $('.clue3');
let $clueFour = $('.clue4');


$('.submit').on('click', function() {
  e.preventDefault();
  DOMupdates.startGame(game);
  DOMupdates.displayPlayerNames();
  $('.playerInput').hide('slow');
  $('.submit').hide('slow');
});

$('.reset').on('click', function () {
  DOMupdates.resetGame();
});

$clueOne.on('click', function() {
  let clueId = $clueOne.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[0][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[0][clueId].pointValue)
  console.log(game.round.clue.categoryClues[0][clueId])
  console.log(game.round.clue.categoryClues[0][clueId].answer)
  console.log($clueOne.index($(event.target)))
});

$clueTwo.on('click', function() {
  let clueId = $clueTwo.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[1][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[1][clueId].pointValue)
  console.log(game.round.clue.categoryClues[1][clueId])
  console.log(game.round.clue.categoryClues[1][clueId].answer)
  console.log($clueTwo.index($(event.target)))
});

$clueThree.on('click', function() {
  let clueId = $clueThree.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[2][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[2][clueId].pointValue)
  console.log(game.round.clue.categoryClues[2][clueId])
  console.log(game.round.clue.categoryClues[2][clueId].answer)
  console.log($clueThree.index($(event.target)))
});

$clueFour.on('click', function() {
  let clueId = $clueFour.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[3][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[3][clueId].pointValue)
  console.log(game.round.clue.categoryClues[3][clueId])
  console.log(game.round.clue.categoryClues[3][clueId].answer)
  console.log($clueFour.index($(event.target)))
});
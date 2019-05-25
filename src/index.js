import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import data from './data'
import Game from './Game.js';
// import Clue from './Clue.js';
import DOMupdates from './DOMupdates';


let game = new Game(data);
let $categoryOne = $('.clue1');
let $categoryTwo = $('.clue2');
let $categoryThree = $('.clue3');
let $categoryFour = $('.clue4');


$('.submit').on('click', function(e) {
  e.preventDefault();
  DOMupdates.startGame(game);
  DOMupdates.displayPlayerNames();
  $('.playerInput').hide('slow');
  $('.submit').hide('slow');
});

$('.reset').on('click', function () {
  DOMupdates.resetGame();
});

$categoryOne.on('click', function() {
  let clueId = $categoryOne.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[0][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[0][clueId].pointValue)
  console.log(game.round.clue.categoryClues[0][clueId])
  console.log(game.round.clue.categoryClues[0][clueId].answer)
  console.log($categoryOne.index($(event.target)))
});

$categoryTwo.on('click', function() {
  let clueId = $categoryTwo.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[1][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[1][clueId].pointValue)
  console.log(game.round.clue.categoryClues[1][clueId])
  console.log(game.round.clue.categoryClues[1][clueId].answer)
  console.log($categoryTwo.index($(event.target)))
});

$categoryThree.on('click', function() {
  let clueId = $categoryThree.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[2][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[2][clueId].pointValue)
  console.log(game.round.clue.categoryClues[2][clueId])
  console.log(game.round.clue.categoryClues[2][clueId].answer)
  console.log($categoryThree.index($(event.target)))
});

$categoryFour.on('click', function() {
  let clueId = $categoryFour.index($(event.target));
  $(event.target).css('background-color', 'pink')
  game.saveClueAnswer(game.round.clue.categoryClues[3][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[3][clueId].pointValue)
  console.log(game.round.clue.categoryClues[3][clueId])
  console.log(game.round.clue.categoryClues[3][clueId].answer)
  console.log($categoryFour.index($(event.target)))
});

$('.submitAnswer').on('click', function(e) {
  e.preventDefault();
  DOMupdates.getPlayerAnswer(game);
});
import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import './images/wallpaper.jpg';
import data from './data'
import Game from './Game.js';
import Round from './Round.js';
import Player from './Player.js';
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
  $(event.target).text(game.round.clue.categoryClues[0][clueId].question).addClass('changeClueColor');
  game.saveClueAnswer(game.round.clue.categoryClues[0][clueId].answer);
  game.saveClueValue(game.round.clue.categoryClues[0][clueId].pointValue);
  game.saveClueIndex('a' + clueId);
  game.round.checkDailyDouble(game);
  console.log(game.round.clue.categoryClues[0][clueId].answer);
  DOMupdates.showDailyDouble();
});

$categoryTwo.on('click', function() {
  let clueId = $categoryTwo.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[1][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[1][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[1][clueId].pointValue)
  game.saveClueIndex('b' + clueId);
  game.round.checkDailyDouble(game);
  console.log(game.round.clue.categoryClues[1][clueId].answer)
  DOMupdates.showDailyDouble();
});

$categoryThree.on('click', function() {
  let clueId = $categoryThree.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[2][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[2][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[2][clueId].pointValue)
  game.saveClueIndex('c' + clueId);
  game.round.checkDailyDouble(game);
  console.log(game.round.clue.categoryClues[2][clueId].answer)
  DOMupdates.showDailyDouble();
});

$categoryFour.on('click', function() {
  let clueId = $categoryFour.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[3][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[3][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[3][clueId].pointValue)
  game.saveClueIndex('d' + clueId);
  game.round.checkDailyDouble(game);
  console.log(game.round.clue.categoryClues[3][clueId].answer)
  DOMupdates.showDailyDouble();
});

$('.submitAnswer').on('click', function(e) {
  e.preventDefault();
  DOMupdates.getPlayerAnswer(game);
  DOMupdates.emptyPlayerAnswer();
});

$('.submitWager').on('click', function (e) {
  e.preventDefault();
  console.log(game.currentPlayer)
  DOMupdates.hideDailyDouble();
  DOMupdates.getPlayerWager(game.currentPlayer);
});
import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import './images/wallpaper.jpg';
import data from './data'
import Game from './Game.js';
import DOMupdates from './DOMupdates';


let game = new Game(data);
let $categoryOne = $('.clue1');
let $categoryTwo = $('.clue2');
let $categoryThree = $('.clue3');
let $categoryFour = $('.clue4');


$(document).ready(() => {
  DOMupdates.hideDailyDouble();
  DOMupdates.hideButtons();
});

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
  game.saveClueValue(game.round.clue.categoryClues[0][clueId].pointValue * 2);
  game.saveClueIndex('a' + clueId);
  game.round.checkDailyDouble(game);

  if (event.target.id === game.round.dailyDouble || event.target.id === game.round.doubleDailyDouble) {
    DOMupdates.showDailyDouble();
  }
  
});

$categoryTwo.on('click', function() {
  let clueId = $categoryTwo.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[1][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[1][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[1][clueId].pointValue)
  game.saveClueIndex('b' + clueId);
  game.round.checkDailyDouble(game);
  if (event.target.id === game.round.dailyDouble || event.target.id === game.round.doubleDailyDouble) {
    DOMupdates.showDailyDouble();
  }
});

$categoryThree.on('click', function() {
  let clueId = $categoryThree.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[2][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[2][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[2][clueId].pointValue)
  game.saveClueIndex('c' + clueId);
  game.round.checkDailyDouble(game);
  if (event.target.id === game.round.dailyDouble || event.target.id === game.round.doubleDailyDouble) {
    DOMupdates.showDailyDouble();
  }
});

$categoryFour.on('click', function() {
  let clueId = $categoryFour.index($(event.target));
  $(event.target).text(game.round.clue.categoryClues[3][clueId].question).addClass('changeClueColor')
  game.saveClueAnswer(game.round.clue.categoryClues[3][clueId].answer)
  game.saveClueValue(game.round.clue.categoryClues[3][clueId].pointValue)
  game.saveClueIndex('d' + clueId);
  game.round.checkDailyDouble(game);
  if (event.target.id === game.round.dailyDouble || event.target.id === game.round.doubleDailyDouble) {
    DOMupdates.showDailyDouble();
  }
});

$('.submitAnswer').on('click', function(e) {
  e.preventDefault();
  DOMupdates.getPlayerAnswer(game);
  DOMupdates.emptyPlayerAnswer();
});

$('.submitWager').on('click', function (e) {
  e.preventDefault();
  DOMupdates.hideDailyDouble();
  DOMupdates.getPlayerWager(game.currentPlayer);
});

$('.finalWagerButton').on('click', function (e) {
  e.preventDefault();
  DOMupdates.saveFinalWager(game)
  DOMupdates.finalJeopardyPlayerInputs()
});

$('.finalAnswerButton').on('click', function (e) {
  e.preventDefault();
  DOMupdates.saveFinalAnswer(game);
  game.finalJeopardy.checkAnswer()
});
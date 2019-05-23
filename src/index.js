import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import data from './data'
import Game from './Game.js';
import Clue from './Clue.js';
import Round from './Round.js';
import DOMupdates from './DOMupdates';


let game = new Game(data);
  $('.submit').on('click', function(e) {
    e.preventDefault();
    DOMupdates.startGame(game);
    DOMupdates.displayPlayerNames();
    $('.playerInput').hide('slow');
  });

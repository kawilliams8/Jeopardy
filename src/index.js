import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png';
import './images/jeopardy-logo.png';
import Game from './Game.js';
import Clue from './Clue.js';
import DOMupdates from './DOMupdates';


let game = new Game();
  $('.submit').on('click', function(e) {
    e.preventDefault();
    DOMupdates.startGame(game);
    DOMupdates.displayPlayerNames();
    $('.playerInput').hide('slow');
  })

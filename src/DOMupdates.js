import $ from 'jquery';
import Clue from './Clue.js';
// import data from '../src/data';
// const clue = new Clue();

let DOMupdates = {

  startGame(game) {
    game.startGame(
      $('.playerInput').eq(0).val(), 
      $('.playerInput').eq(1).val(), 
      $('.playerInput').eq(2).val()
    );

  },

  displayPlayerNames() {
    $('.player').eq(0).text($('.playerInput').eq(0).val());
    $('.player').eq(1).text($('.playerInput').eq(1).val());
    $('.player').eq(2).text($('.playerInput').eq(2).val());
  },

  displayCurrentPlayer() {
    let newArticle = $(
      `<input class="playerAnswerInput" type="text" placeholder="Enter your answer">
          <button class="submitAnswer">Submit</button>
          <p>You're Up!</p>`
    )
    $('.player1').append(newArticle);
  },

  changeCategory1(category) {
    $('#a1').text(category);
  },

  changeCategory2(category) {
    $('#b1').text(category);
  },

  changeCategory3(category) {
    $('#c1').text(category);
  },

  changeCategory4(category) {
    $('#d1').text(category);
  },

  addCluesToCardsA2(clues) {
    $('#a2').click(function() {
      $('#a2').text(clues.question).addClass('changeClueColor')
      console.log(clues)
    });
  },

  addCluesToCardsB2(clues) {
    $('#b2').click(function() {
      $('#b2').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsC2(clues) {
    $('#c2').click(function() {
      $('#c2').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsD2(clues) {
    $('#d2').click(function() {
      $('#d2').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsA3(clues) {
    $('#a3').click(function() {
      $('#a3').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsB3(clues) {
    $('#b3').click(function() {
      $('#b3').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsC3(clues) {
    $('#c3').click(function() {
      $('#c3').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsD3(clues) {
    $('#d3').click(function() {
      $('#d3').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsA4(clues) {
    $('#a4').click(function() {
      $('#a4').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsB4(clues) {
    $('#b4').click(function() {
      $('#b4').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsC4(clues) {
    $('#c4').click(function() {
      $('#c4').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsD4(clues) {
    $('#d4').click(function() {
      $('#d4').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsA5(clues) {
    $('#a5').click(function() {
      $('#a5').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsB5(clues) {
    $('#b5').click(function() {
      $('#b5').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsC5(clues) {
    $('#c5').click(function() {
      $('#c5').text(clues.question).addClass('changeClueColor')
    })
  },

  addCluesToCardsD5(clues) {
    $('#d5').click(function() {
      $('#d5').text(clues.question).addClass('changeClueColor')
    })
  }
}

export default DOMupdates;
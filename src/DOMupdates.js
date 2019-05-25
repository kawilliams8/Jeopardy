import $ from 'jquery';
// import Clue from './Clue.js';
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

  disableStartButton() {
    $('.submit').prop('disabled', true);
  },

  displayPlayerNames() {
    $('.player').eq(0).text($('.playerInput').eq(0).val());
    $('.player').eq(1).text($('.playerInput').eq(1).val());
    $('.player').eq(2).text($('.playerInput').eq(2).val());
  },

  displayCurrentPlayer() {
    let newArticle = $(
      `<p>You're Up! Choose a clue.</p>
      <input class="playerAnswerInput" type="text" placeholder="Enter your answer">
      <button class="submitAnswer">Submit</button>`
    )
    $('.player1').append(newArticle);
  },

  changeCategory(category) {
    $('.category').each((index, curCategory) => {
      $(curCategory).text(category[index])
    });
  },
  
  changeClue1(clue) {
    $('.clue1').each((index, curClue) => {
      $(curClue).text(clue[index].question).addClass('changeClueColor')
    });
  },

  changeClue2(clue) {
    $('.clue2').each((index, curClue) => {
      $(curClue).text(clue[index].question).addClass('changeClueColor')
    });
  },

  changeClue3(clue) {
    $('.clue3').each((index, curClue) => {
      $(curClue).text(clue[index].question).addClass('changeClueColor')
    });
  },

  changeClue4(clue) {
    $('.clue4').each((index, curClue) => {
      $(curClue).text(clue[index].question).addClass('changeClueColor')
    });
  },

  

  resetGame() {
    window.location.reload(true);
  }
}

export default DOMupdates;
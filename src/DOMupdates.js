import $ from 'jquery';
import Clue from './Clue.js';
// import data from '../src/data';
const clue = new Clue();

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
      `<input class="playerAnswerInput" type="text" placeholder="Enter your answer">
          <button class="submitAnswer">Submit</button>
          <p>You're Up!</p>`
    )
    $('.player1').append(newArticle);
  },

  changeCategory(category) {
    $('.category').each((index, curCategory) => {
      $(curCategory).text(category[index])
    });
  },
  
  changeClue(clue) {
    $('.clue').each((index, curClue) => {
      $(curClue).text(clue[index].question).addClass('changeClueColor')
    });
  },

  // addCluesToCards(game, boardLocation) {
  //     $('#a2').text(clues.question).addClass('changeClueColor')
  //     console.log(clues)
  // },

//   addCluesToCards100(td, clueVariableArray) {
//   for(let i = 0; i<clueVariableArray.length; i++) {
//     $(td[i]).text(clueVariableArray[i][1].question).addClass('changeClueColor');
//   }
// },

  // addCluesToCards200(td, clueVariableArray) {
  //   for (let i = 0; i < clueVariableArray.length; i++) {
  //     $(td[i]).text(clueVariableArray[i][2].question).addClass('changeClueColor');
  //   }
  // },

  // addCluesToCards300(td, clueVariableArray) {
  //   for (let i = 0; i < clueVariableArray.length; i++) {
  //     $(td[i]).text(clueVariableArray[i][3].question).addClass('changeClueColor');
  //   }
  // },

  // addCluesToCards400(td, clueVariableArray) {
  //   for (let i = 0; i < clueVariableArray.length; i++) {
  //     $(td[i]).text(clueVariableArray[i][4].question).addClass('changeClueColor');
  //   }
  // },

  resetGame() {
      window.location.reload(true);
  }
}

export default DOMupdates;
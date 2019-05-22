import $ from 'jquery';
import Clue from './Clue.js';
// let clue = new Clue();
const clue = new Clue();

let DOMupdates = {

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

  addCluesToCards1(clues) {
    $('#a2').click(function() {
      $('#a2').text(clues)
    });
  },

  addCluesToCards2(clues) {
    $('#b2').click(function() {
      $('#b2').text(clues)
    })
  },

  addCluesToCards3(clues) {
    $('#c2').click(function() {
      $('#c2').text(clues)
    })
  },

  addCluesToCards4(clues) {
    $('#d2').click(function() {
      $('#d2').text(clues)
    })
  }


}

export default DOMupdates;
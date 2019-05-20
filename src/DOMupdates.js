import $ from 'jquery';
// import Clue from './Clue.js';
// let clue = new Clue();

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
  }


}

export default DOMupdates;
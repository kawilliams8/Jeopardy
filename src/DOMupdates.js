import $ from 'jquery';
import Clue from './Clue.js';

let clue = new Clue();

let DOMupdates = {
  changeCategory1() {
    console.log('hello')
    console.log(clue.getCategoryName())
    $('#a1').text('hello');
  }


}

export default DOMupdates;
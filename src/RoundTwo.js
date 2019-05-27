import Round from './Round.js';
import Clue from './Clue.js';
import Game from './Game.js';
import DOMupdates from './DOMupdates.js';

class RoundTwo {
  constructor(data) {
    // super(data);
    // this.startRoundTwo();
    // this.roundTwoCategoryNums = [];
    // this.usedCategories = [];
  }

  startRoundTwo() {
    this.populateBoardWithCategories();
    // debugger;
    this.populateBoardWithClues();
  }

  makeTwoDailyDoubles() {
    this.dailyDouble = 'hello';
    console.log('round two:', this.dailyDouble);
  }
  


}

export default RoundTwo;
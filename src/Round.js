import Clue from './Clue.js';
// import Game from './Game.js';
import DOMupdates from './DOMupdates.js';
// import $ from 'jquery';

class Round {
  constructor(data) {
    this.data = data;
    this.rounds = ['Round 1: Jeopardy', 'Round 2: Double Jeopardy', 'Round 3: Final Jeopardy'];
    this.dailyDouble = '';
    this.doubleDailyDouble = '';
    this.clue = new Clue(data);
  }

  populateBoardWithCategories() {
    this.clue.selectRandomCategories();
    this.clue.findCluesForACategory();
    this.clue.getCategoryName();
    DOMupdates.changeCategory(this.clue.randomCategoryNames);
  }

  populateBoardWithClues() {
    DOMupdates.changeClue1(this.clue.categoryClues[0])
    DOMupdates.changeClue2(this.clue.categoryClues[1])
    DOMupdates.changeClue3(this.clue.categoryClues[2])
    DOMupdates.changeClue4(this.clue.categoryClues[3])
  }

  selectRandomDailyDouble() {
    let dailyDouble = [];
    let letters = 'abcd';
    let lettersLength = letters.length;
    for (var a = 0; a < 1; a++) {
      dailyDouble.push(letters.charAt(Math.floor(Math.random() * lettersLength)));
    }
    let numbers = '0123';
    let numbersLength = numbers.length;
    for (var i = 0; i < 1; i++) {
      dailyDouble.push(numbers.charAt(Math.floor(Math.random() * numbersLength)));
    }
    this.dailyDouble = dailyDouble.join('');
    console.log('random DD: ', this.dailyDouble);
  }

  selectRoundTwoRandomDailyDoubles() {
    let doubleDailyDouble = [];
    let letters = 'abcd';
    let lettersLength = letters.length;
    for (var a = 0; a < 1; a++) {
      doubleDailyDouble.push(letters.charAt(Math.floor(Math.random() * lettersLength)));
    }
    let numbers = '0123';
    let numbersLength = numbers.length;
    for (var i = 0; i < 1; i++) {
      doubleDailyDouble.push(numbers.charAt(Math.floor(Math.random() * numbersLength)));
    }
    this.doubleDailyDouble = doubleDailyDouble.join('');
    console.log('random DDD: ', this.doubleDailyDouble);
  }

  checkDailyDouble(game) {
    console.log('dd:', this.dailyDouble)
    if (game.clueIndex === this.dailyDouble || game.clueIndex === this.doubleDailyDouble) {
      DOMupdates.showInstructions('DAILY DOUBLE! Please enter a wager between $5 and current score.')
    }
  }
}

export default Round;
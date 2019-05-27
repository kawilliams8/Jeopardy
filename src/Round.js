import Clue from './Clue.js';
import Game from './Game.js';
import DOMupdates from './DOMupdates.js';
// import $ from 'jquery';

class Round {
  constructor(data) {
    this.data = data;
    this.rounds = ['Round 1: Jeopardy', 'Round 2: Double Jeopardy', 'Round 3: Final Jeopardy'];
    this.dailyDouble = '';
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
    var characters = 'abcd';
    var charactersLength = characters.length;
      for (var i = 0; i < 1; i++) {
        dailyDouble.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
    var characters = '0123';
    var charactersLength = characters.length;
      for (var i = 0; i < 1; i++) {
        dailyDouble.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
    this.dailyDouble = dailyDouble.join('');
    console.log('random DD: ', this.dailyDouble);
  }

  checkDailyDouble(game) {
    console.log('dd:', this.dailyDouble)
    if (game.clueIndex === this.dailyDouble) {
      alert('DAILY DOUBLE! Please enter a wager')
    }
  }
}

export default Round;
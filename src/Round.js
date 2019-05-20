import Clue from './Clue.js';
import DOMupdates from './DOMupdates.js';

class Round {
  constructor() {
    this.rounds = ['Jeopardy', 'Double Jeopardy', 'Final Jeopardy'];
    this.clue = new Clue();
  }

  update() {
    this.clue.selectRandomCategories();
    this.clue.findCluesForACategory();
    DOMupdates.changeCategory1(this.clue.getCategoryName()[0]);
    DOMupdates.changeCategory2(this.clue.getCategoryName()[1]);
    DOMupdates.changeCategory3(this.clue.getCategoryName()[2]);
    DOMupdates.changeCategory4(this.clue.getCategoryName()[3]);
    console.log('Category IDs:',this.clue.randomCategories)
    console.log('Clues:', this.clue.randomClues)
  }

  //1st round
    //must have 4 categories w/ 4 clues per cat
    //1 daily double - single player should be able to input wager

  //2nd round
    //must have 4 categories w/ 4 clues per cat
    //2 daily doubles - single player should be able to input wager
    //player with lowest score goes first

  //final round
    //1 category with 1 clue
    //each player should be able to input wager
    //player with lowest score goes first
}

export default Round;
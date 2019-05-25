import Clue from './Clue.js';
import DOMupdates from './DOMupdates.js';
// import $ from 'jquery';

class Round {
  constructor(data) {
    this.data = data;
    this.rounds = ['Jeopardy', 'Double Jeopardy', 'Final Jeopardy'];
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
    console.log(this.clue.categoryClues)
    // DOMupdates.change200Clue(this.clue.categoryClues)
  }
  

    


}

export default Round;
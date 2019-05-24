import Clue from './Clue.js';
import DOMupdates from './DOMupdates.js';
import $ from 'jquery';

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


  populateBoardWithClues(){
    // this.clue.findCluesForACategory();
    DOMupdates.changeClue(this.clue.categoryClues)
    console.log(this.clue.category)
  }
  // populateBoardWithClues() {
  //   this.clue.selectRandomCategories();
  //   this.clue.findCluesForACategory();
  //   DOMupdates.addCluesToCardsA2(this.clue.findCluesForACategory()[0][0]);
  //   DOMupdates.addCluesToCardsB2(this.clue.findCluesForACategory()[1][0]);
  //   DOMupdates.addCluesToCardsC2(this.clue.findCluesForACategory()[2][0]);
  //   DOMupdates.addCluesToCardsD2(this.clue.findCluesForACategory()[3][0]);
  //   DOMupdates.addCluesToCardsA3(this.clue.findCluesForACategory()[0][1]);
  //   DOMupdates.addCluesToCardsB3(this.clue.findCluesForACategory()[1][1]);
  //   DOMupdates.addCluesToCardsC3(this.clue.findCluesForACategory()[2][1]);
  //   DOMupdates.addCluesToCardsD3(this.clue.findCluesForACategory()[3][1]);
  //   DOMupdates.addCluesToCardsA4(this.clue.findCluesForACategory()[0][2]);
  //   DOMupdates.addCluesToCardsB4(this.clue.findCluesForACategory()[1][2]);
  //   DOMupdates.addCluesToCardsC4(this.clue.findCluesForACategory()[2][2]);
  //   DOMupdates.addCluesToCardsD4(this.clue.findCluesForACategory()[3][2]);
  //   DOMupdates.addCluesToCardsA5(this.clue.findCluesForACategory()[0][3]);
  //   DOMupdates.addCluesToCardsB5(this.clue.findCluesForACategory()[1][3]);
  //   DOMupdates.addCluesToCardsC5(this.clue.findCluesForACategory()[2][3]);
  //   DOMupdates.addCluesToCardsD5(this.clue.findCluesForACategory()[3][3]);

    // populateBoardWithClues() {
    //   const td = $.makeArray($('#0, #1, #2, #3'));
    //   // const td200 = $.makeArray($('.clues td'));
    //   // const td300 = $.makeArray($('.clues td'));
    //   // const td400 = $.makeArray($('.clues td'));
    //   const clueVariableArray = this.clue.findCluesForACategory();
    //   console.log('clueVariableArray: ', clueVariableArray)
    //   DOMupdates.addCluesToCards(td, clueVariableArray);
    // }

    //update boardLocations back to A1, etc
    //grab those ids so they can be passed to populateBoardwithClues()
    //split the id so you can access the first and second index of A and 1 from 'A1'
    //switch statement: if(case) letter, determine which column
    //get class names of the dollar amounts???
    //if pointValue === clue.pointValue, then display the question
    //pass the boardLocation id to the DOMupdtaes 
}

export default Round;
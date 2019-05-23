import Clue from './Clue.js';
import DOMupdates from './DOMupdates.js';


class Round {
  constructor(data) {
    this.data = data;
    this.rounds = ['Jeopardy', 'Double Jeopardy', 'Final Jeopardy'];
    this.clue = new Clue(data);
  }

  populateBoardWithCategories() {
    this.clue.selectRandomCategories();
    this.clue.findCluesForACategory();
    DOMupdates.changeCategory1(this.clue.getCategoryName()[0].replace(/([A-Z])/g, ' $1').trim().toUpperCase());
    DOMupdates.changeCategory2(this.clue.getCategoryName()[1].replace(/([A-Z])/g, ' $1').trim().toUpperCase());
    DOMupdates.changeCategory3(this.clue.getCategoryName()[2].replace(/([A-Z])/g, ' $1').trim().toUpperCase());
    DOMupdates.changeCategory4(this.clue.getCategoryName()[3].replace(/([A-Z])/g, ' $1').trim().toUpperCase());
  }

  populateBoardWithClues() {
    this.clue.selectRandomCategories();
    this.clue.findCluesForACategory();
    DOMupdates.addCluesToCardsA2(this.clue.findCluesForACategory()[0][0]);
    DOMupdates.addCluesToCardsB2(this.clue.findCluesForACategory()[1][0]);
    DOMupdates.addCluesToCardsC2(this.clue.findCluesForACategory()[2][0]);
    DOMupdates.addCluesToCardsD2(this.clue.findCluesForACategory()[3][0]);
    DOMupdates.addCluesToCardsA3(this.clue.findCluesForACategory()[0][1]);
    DOMupdates.addCluesToCardsB3(this.clue.findCluesForACategory()[1][1]);
    DOMupdates.addCluesToCardsC3(this.clue.findCluesForACategory()[2][1]);
    DOMupdates.addCluesToCardsD3(this.clue.findCluesForACategory()[3][1]);
    DOMupdates.addCluesToCardsA4(this.clue.findCluesForACategory()[0][2]);
    DOMupdates.addCluesToCardsB4(this.clue.findCluesForACategory()[1][2]);
    DOMupdates.addCluesToCardsC4(this.clue.findCluesForACategory()[2][2]);
    DOMupdates.addCluesToCardsD4(this.clue.findCluesForACategory()[3][2]);
    DOMupdates.addCluesToCardsA5(this.clue.findCluesForACategory()[0][3]);
    DOMupdates.addCluesToCardsB5(this.clue.findCluesForACategory()[1][3]);
    DOMupdates.addCluesToCardsC5(this.clue.findCluesForACategory()[2][3]);
    DOMupdates.addCluesToCardsD5(this.clue.findCluesForACategory()[3][3]);
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
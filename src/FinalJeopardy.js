import DOMupdates from './DOMupdates.js';
import Round from './Round.js';


class FinalJeopardy extends Round {
  constructor (data) {
    super (data)
    this.answer;
    this.wagers = [];
    this.answers = [];
  }

  startFinalRound() {
    this.clue.selectRandomCategories();
    this.clue.getCategoryName();
    this.clue.findCluesForACategory();
    this.answer = this.clue.categoryClues[0][0].answer;
    DOMupdates.hideGameboard();
    DOMupdates.showWagerInputs();
    DOMupdates.displayCurrentRound(this.rounds[2]);
    DOMupdates.showInstructions('Enter a wager higher than $5 but lower than your current amount.')

  }

  collectWagers (wager1, wager2, wager3) {
    this.wagers.push(wager1, wager2, wager3);
    DOMupdates.finalJeopardy(this.clue.randomCategoryNames[0], this.clue.categoryClues[0][0].question);
    DOMupdates.showInstructions('Enter a guess for the clue.')
  }

  collectAnswers (answer1, answer2, answer3) {
    this.answers.push(answer1, answer2, answer3)
  }

}

export default FinalJeopardy;
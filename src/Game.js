import Round from './Round.js';
import Player from './Player.js';
import FinalJeopardy from './FinalJeopardy.js';
// import Clue from './Clue.js';
import DOMupdates from './DOMupdates';


class Game {
  constructor(data) {
    this.data = data;
    this.round;
    this.player;
    this.players = [];
    this.questionCounter = 0;
    this.roundCounter = 0;
    this.currentPlayer = null;
    this.clueAnswer;
    this.cluePointValue;
    this.clueIndex;
    this.playerAnswer;
  }

  startGame(name1, name2, name3) {
    this.round = new Round(this.data);
    this.player = new Player(this.data);
    this.round.populateBoardWithCategories();
    this.round.populateBoardWithClues();
    this.round.selectRandomDailyDouble();
    if (this.players.length === 0) {
      let player1 = new Player(name1);
      let player2 = new Player(name2);
      let player3 = new Player(name3);
      this.players.push(player1, player2, player3);
    }
    this.currentPlayer = this.players[0];
    DOMupdates.displayCurrentPlayer('.player1Input');
    DOMupdates.displayCurrentRound(this.round.rounds[0]);
    DOMupdates.disableStartButton();
    DOMupdates.hideDailyDouble();
  }

  saveClueAnswer(answer) {
    this.clueAnswer = answer.toLowerCase()
  }
  
  saveClueValue(value) {
    this.cluePointValue = value;
  }

  saveClueIndex(index) {
    this.clueIndex = index;
  }

  savePlayerAnswer(playerInput) {
    this.playerAnswer = playerInput.toLowerCase();
    this.checkPlayerAnswer();
  }

  checkPlayerAnswer() {
    let index = this.players.indexOf(this.currentPlayer);
    if (this.playerAnswer === this.clueAnswer) {
      if (this.roundCounter === 2) {
        this.currentPlayer.addDoubleScore(index, this.cluePointValue);
      } else {
        this.currentPlayer.addScore(index, this.cluePointValue)
      }
      DOMupdates.showInstructions('CORRECT! Choose another clue!');
      DOMupdates.emptyClue(this.clueIndex);
      this.questionCounter++;
      this.cycleRounds();
    } else if (this.playerAnswer !== this.clueAnswer && this.clueIndex === this.round.dailyDouble) {
      this.cyclePlayerTurn();
    } else {
      if (this.roundCounter === 2) {
        this.currentPlayer.subtractDoubleScore(index, this.cluePointValue)
      } else {
        this.currentPlayer.subtractScore(index, this.cluePointValue);
      }
      DOMupdates.showInstructions('INCORRECT! Next player, take a guess!')
      this.cyclePlayerTurn();
      this.cycleRounds();
    }
  }

  cycleRounds() {
    if (this.questionCounter === 16) {
      this.round = new Round(this.data)
      DOMupdates.resetClueColorRoundTwo();
      this.round.populateBoardWithCategories();
      this.round.populateBoardWithClues();
      this.roundCounter = 2;
      this.populateBoardWithValues();
      DOMupdates.displayCurrentRound(this.round.rounds[1]);
      this.round.selectRandomDailyDouble();
      this.round.selectRoundTwoRandomDailyDoubles();
    } else if(this.questionCounter === 32){
        this.round = new Round(this.data);
        this.finalJeopardy = new FinalJeopardy(this.data)
        this.roundCounter = 3;
        this.finalJeopardy.startFinalRound()
    } else {
    }
  }

  cyclePlayerTurn() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
      DOMupdates.displayCurrentPlayer('.player2Input', '.player1Input');
    } else if (this.currentPlayer === this.players[1]) {
      this.currentPlayer = this.players[2];
      DOMupdates.displayCurrentPlayer('.player3Input', '.player2Input');
    } else if (this.currentPlayer === this.players[2]) {
      this.currentPlayer = this.players[0];
      DOMupdates.displayCurrentPlayer('.player1Input', '.player3Input');
    }
  }

  populateBoardWithValues() {
    DOMupdates.changeClueValue();
  }

  resetGame() {
    DOMupdates.resetGame();
  }

}

export default Game;
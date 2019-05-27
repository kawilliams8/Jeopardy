import Round from './Round.js';
import Player from './Player.js';
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
    console.log('clueInd:', this.clueIndex);
  }

  savePlayerAnswer(playerInput) {
    this.playerAnswer = playerInput.toLowerCase();
    this.checkPlayerAnswer();
  }

  checkPlayerAnswer() {
    let index = this.players.indexOf(this.currentPlayer);
    if (this.playerAnswer === this.clueAnswer) {
      this.currentPlayer.addScore(index, this.cluePointValue);
      alert('You are correct! Please choose another clue!')
      DOMupdates.emptyClue(this.clueIndex);
      this.questionCounter++;
      console.log('questionCounter: ', this.questionCounter);
    } else if (this.playerAnswer !== this.clueAnswer && this.clueIndex === this.round.dailyDouble) {
      console.log('check daily double')
      this.cyclePlayerTurn();
    } else {
      this.currentPlayer.subtractScore(index, this.cluePointValue);
      alert('You are wrong! Next player now answers the same question!')
      this.cyclePlayerTurn();
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

  resetGame() {
    DOMupdates.resetGame();
  }

}

export default Game;
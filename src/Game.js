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
    this.roundCounter = 0;
    this.currentPlayer = null;
  }

  startGame(name1, name2, name3) {
    this.round = new Round(this.data);
    this.player = new Player(this.data);
    this.round.populateBoardWithCategories();
    this.round.populateBoardWithClues();
    if (this.players.length === 0) {
      let player1 = new Player(name1);
      let player2 = new Player(name2);
      let player3 = new Player(name3);
      this.players.push(player1, player2, player3);
    }
    this.currentPlayer = this.players[0];
    DOMupdates.displayCurrentPlayer(this.currentPlayer.name);
    DOMupdates.disableStartButton();
  }

  resetGame() {
    DOMupdates.resetGame();
  }
}

export default Game;
import Round from './Round.js';
import Player from './Player.js';

class Game {
  constructor() {
    this.round;
    this.player;
    this.players = [];
    this.roundCounter = 0;
  }

  startGame(){
    this.round = new Round();
    this.player = new Player();
    this.round.populateBoardWithCategories();
    this.round.populateBoardWithClues();
  }
}

export default Game;
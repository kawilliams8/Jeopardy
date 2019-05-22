import Round from './Round.js';
import Player from './Player.js';

class Game {
  constructor() {
    this.round = new Round();
    this.player = new Player();
    this.roundCounter = 0;
    this.round.update();
  }

  
}

export default Game;
import Round from './Round.js';
import Clue from './Clue.js';
import Player from './Player.js';

class Game {
  constructor() {
    this.clue = new Clue();
    this.round = new Round();
    this.player = new Player();
    
  }
}

export default Game;
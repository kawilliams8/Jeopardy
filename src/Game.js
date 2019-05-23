import Round from './Round.js';
import Player from './Player.js';
import Clue from './Clue.js';


class Game {
  constructor(data) {
    this.data = data;
    this.round;
    this.player;
    this.players = [];
    this.roundCounter = 0;
  }

  startGame(){
    this.round = new Round(this.data);
    this.player = new Player(this.data);
    this.round.populateBoardWithCategories();
    this.round.populateBoardWithClues();
  }
}

export default Game;
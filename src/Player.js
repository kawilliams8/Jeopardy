import DOMupdates from './DOMupdates.js';
import Game from './Game.js';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addScore(pointValue) {
    this.score += pointValue;
    DOMupdates.updatePlayerScore(this.score);
  }

  subtractScore(pointValue) {
    this.score -= pointValue;
    DOMupdates.updatePlayerScore(this.score);
  }


}

export default Player;
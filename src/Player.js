import DOMupdates from './DOMupdates.js';
// import Game from './Game.js';
// import Round from './Round.js';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.wager;
  }

  addScore(index, pointValue) {
    this.score += pointValue;
    DOMupdates.updatePlayerScore(index, this.score);
  }

  subtractScore(index, pointValue) {
    this.score -= pointValue;
    DOMupdates.updatePlayerScore(index, this.score);
  }

  addDoubleScore(index, pointValue) {
    this.score += pointValue * 2;
    DOMupdates.updatePlayerScore(index, this.score);
  }

  subtractDoubleScore(index, pointValue) {
    this.score -= pointValue * 2;
    DOMupdates.updatePlayerScore(index, this.score);
  }

  acceptWager(wager) {
    this.wager = wager;
    this.score = this.score + parseInt(this.wager);
  }
}

export default Player;
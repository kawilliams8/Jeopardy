import chai from 'chai';
import DOMupdates from '../src/DOMupdates';
const expect = chai.expect;
import data from '../src/data';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Clue from '../src/Clue.js';
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(DOMupdates, 'startGame', () => true);

describe('See if the tests are running', function() {
  let game;
  beforeEach(function () {
    game = new Game(data);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  // it.only('should invoke the method that starts the Game', function () {
  //   game.startGame();
  //   expect(DOMupdates.startGame).to.have.been.called(1);
  // });
});
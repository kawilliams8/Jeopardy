import chai from 'chai';
import DOMupdates from '../src/DOMupdates';
const expect = chai.expect;
import data from '../src/data';
import Game from '../src/Game.js';
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(DOMupdates, 'startGame', () => true);

describe('Game', function() {
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

  it('should save answer from clicked clue', function() {
    game.saveClueAnswer('beans');
    expect(game.clueAnswer).to.equal('beans');
  });

  it('should save clue value', function() {
    game.saveClueValue(100);
    expect(game.cluePointValue).to.equal(100);
  });
});
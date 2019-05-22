import chai from 'chai';
const expect = chai.expect;
import Game from '../src/Game.js';
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(DOMupdates, 'startGame', () => true);

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should invoke the method that starts the Game', function () {
    game.startGame();
    expect(DOMupdates.startGame).to.have.been.called(1);
  });
});
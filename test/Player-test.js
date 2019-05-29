import chai from 'chai'
const expect = chai.expect;
import Player from '../src/Player.js'
import spies from 'chai-spies';
import DOMupdates from '../src/DOMupdates.js';
chai.use(spies);
import data from '../src/data';

chai.spy.on(DOMupdates, 'updatePlayerScore', () => true);

describe('Player', function() {
  let player;
  beforeEach(function () {
    player = new Player(data);
  });

  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', function() {
    expect(player).to.be.an.instanceof(Player);
  });

  it('should have default properties', function() {
    expect(player.name).to.equal(player.name);
    expect(player.score).to.equal(0);
  });

  it('should increment the score of a correct answer', function() {
    player.addScore(0, 100);
    expect(player.score).to.equal(100);
  });
  
  it('should decrement the score of a wrong answer', function() {
    player.subtractScore(0, 100);
    expect(player.score).to.equal(-100);
  });

  it('should add double the point value in round 2', function() {
    player.addDoubleScore(0, 100);
    expect(player.score).to.equal(200);
  });

  it('should subtract double the point value in round 2', function() {
    player.subtractDoubleScore(0, 100);
    expect(player.score).to.equal(-200);
  });

  it('should accept a player wager for the daily double', function() {
    player.acceptWager(100);
    expect(player.wager).to.equal(100)
  })

});
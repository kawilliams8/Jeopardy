import chai from 'chai';
const expect = chai.expect;
import data from '../src/data';
import DOMupdates from '../src/DOMupdates.js';
// import Game from '../src/Game.js';
import Round from '../src/Round.js';
// import Clue from '../src/Clue.js';
import spies from 'chai-spies';
chai.use(spies);


chai.spy.on(DOMupdates, 'changeCategory1', () => true);
chai.spy.on(DOMupdates, 'changeCategory2', () => true);
chai.spy.on(DOMupdates, 'changeCategory3', () => true);
chai.spy.on(DOMupdates, 'changeCategory4', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsA2', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsB2', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsC2', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsD2', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsA3', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsB3', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsC3', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsD3', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsA4', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsB4', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsC4', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsD4', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsA5', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsB5', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsC5', () => true);
chai.spy.on(DOMupdates, 'addCluesToCardsD5', () => true);

describe('Round', function() {
  let round;
  beforeEach(function () {
    round = new Round(data);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should invoke the method of populating categories', function() {
    round.populateBoardWithCategories();
    expect(DOMupdates.changeCategory1).to.have.been.called(1);
  });

  it('should invoke the method of populating clues', function() {
    round.populateBoardWithClues();
    expect(DOMupdates.addCluesToCardsA2).to.have.been.called(1);
  });

});


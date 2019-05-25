import chai from 'chai';
const expect = chai.expect;
import data from '../src/data';
import DOMupdates from '../src/DOMupdates.js';
// import Game from '../src/Game.js';
import Round from '../src/Round.js';
// import Clue from '../src/Clue.js';
import spies from 'chai-spies';
chai.use(spies);


chai.spy.on(DOMupdates, 'changeCategory', () => true);
chai.spy.on(DOMupdates, 'changeClue1', () => true);
chai.spy.on(DOMupdates, 'changeClue2', () => true);
chai.spy.on(DOMupdates, 'changeClue3', () => true);
chai.spy.on(DOMupdates, 'changeClue4', () => true);


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
    expect(DOMupdates.changeCategory).to.have.been.called(1);
  });

  it('should invoke the method of populating clues', function() {
    round.populateBoardWithClues();
    expect(DOMupdates.changeClue1).to.have.been.called(1);
  });

});


import chai from 'chai';
const expect = chai.expect;
import data from '../src/data';
import DOMupdates from '../src/DOMupdates.js';
import Round from '../src/Round.js';
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
  });

  it('should have default properties', function() {
    expect(round.rounds).to.be.an('array');
    expect(round.dailyDouble).to.be.an('string')
    expect(round.doubleDailyDouble).to.be.an('string')
  })

  it('should invoke the method of populating categories', function() {
    round.populateBoardWithCategories();
    expect(DOMupdates.changeCategory).to.have.been.called(1);
  });

  it('should invoke the method of populating clues', function() {
    round.populateBoardWithClues();
    expect(DOMupdates.changeClue1).to.have.been.called(1);
  });

  it('should select a daily double', function() {
    round.selectRandomDailyDouble();
    expect(round.dailyDouble).to.be.a('string')
  });

  it('should select two daily doubles for round two', function() {
    round.selectRoundTwoRandomDailyDoubles();
    expect(round.doubleDailyDouble).to.be.a('string')
  });

});


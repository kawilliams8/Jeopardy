import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
import DOMupdates from '../src/DOMupdates.js';
import FinalJeopardy from '../src/FinalJeopardy.js';
chai.use(spies);

chai.spy.on(DOMupdates, 'finalJeopardy', () => true);
chai.spy.on(DOMupdates, 'saveFinalWager', () => true);
chai.spy.on(DOMupdates, 'showInstructions', () => true);

describe('FinalJeopardy', function() {
  let finalJeopardy;
  beforeEach(function () {
    finalJeopardy = new FinalJeopardy();
  });

  it('should be a function', function() {
    expect(FinalJeopardy).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(finalJeopardy).to.be.an.instanceof(FinalJeopardy);
  })

  it('should have default properties', function() {
    expect(finalJeopardy.wagers).to.be.an('array');
    expect(finalJeopardy.answers).to.be.an('array');    
  });

  it.skip('should collect the wagers of the players', function() {
    expect(finalJeopardy.wagers).to.deep.equal([]);
    finalJeopardy.collectWagers(100, 200, 300);
    expect(finalJeopardy.wagers).to.deep.equal([100, 200, 300]);
  });

  it('should collect the answers of the players', function() {
    expect(finalJeopardy.answers).to.deep.equal([]);
    finalJeopardy.collectAnswers('chicago', 'denver', 'austin');
    expect(finalJeopardy.answers).to.deep.equal(['chicago', 'denver', 'austin']);
  });

});
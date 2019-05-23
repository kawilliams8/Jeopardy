import chai from 'chai'
const expect = chai.expect;
import Turn from '../src/Turn.js'
import spies from 'chai-spies';
chai.use(spies);
import data from '../src/data';


describe('See if the tests are running', function() {
  let turn;
  beforeEach(function () {
    turn = new Turn(data);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  
});
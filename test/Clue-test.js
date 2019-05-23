import chai from 'chai';
const expect = chai.expect;
import Clue from '../src/Clue.js';
import Round from '../src/Round.js';
import Game from '../src/Game.js';
import spies from 'chai-spies';
chai.use(spies);
import data from '../src/data';


describe('Clue', function() {
  let clue;
  beforeEach(function () {
    clue = new Clue(data);
  });

  it('should be a function', function() {
    expect(Clue).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(clue).to.be.an.instanceOf(Clue);
  });

  it('should shuffle categories', function() {
    clue.selectRandomCategories()
    expect(clue.randomCategories.length).to.equal(4)
  })

  it('should create an array that contains 4 numbers', function() {    
    clue.selectRandomCategories();
    expect(clue.randomCategories).to.be.an('array');
  });

  it('should keep track of all used categories', function() {
    clue.selectRandomCategories();
    expect(clue.usedCategories).to.be.an('array');
  });

  it('should choose all questions that match the category', function() {
    expect(clue.randomClues.length).to.be.a('number');
  });

  it('should create an array with category names', function() {
    expect(clue.getCategoryName()).to.be.a('array')
  });

});
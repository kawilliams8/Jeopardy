import chai from 'chai';
const expect = chai.expect;
import Clue from '../src/Clue.js';


describe('Clue', function() {
  let clue;
  beforeEach(function () {
    clue = new Clue();
  });

  it('should be a function', function() {
    expect(Clue).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(clue).to.be.an.instanceOf(Clue);
  });

  it('should create a random number array', function() {
    clue.selectRandomCategories();
    expect(clue.randomCategories).to.be.an('array');
  });

  it('should have an array with a length of 4', function() {
    clue.selectRandomCategories();
    expect(clue.randomCategories.length).to.equal(4);
  });

  it('should keep track of all used categories', function() {
    clue.selectRandomCategories();
    expect(clue.usedCategories).to.be.an('array');
  });

  it('should choose 4 questions based on categoryId', function() {
    clue.selectRandomCategories();
    clue.findCluesForACategory();
    expect(clue.randomClues.length).to.equal(4);
  });

});
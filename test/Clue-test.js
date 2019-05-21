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

  it('should shuffle categories', function() {
    clue.selectRandomCategories()
    expect(clue.randomCategories.length).to.equal(4)
  })

  it('should create a random number array', function() {    clue.selectRandomCategories();
    expect(clue.randomCategories).to.be.an('array');
  });

  it('should create a random number array', function() {
    clue.selectRandomCategories();
    expect(clue.randomCategories).to.be.an('array');
  });

  it('should keep track of all used categories', function() {
    clue.selectRandomCategories();
    expect(clue.usedCategories).to.be.an('array');
  });

  it('should choose all questions that match the category', function() {
    clue.selectRandomCategories();
    clue.findCluesForACategory();
    expect(clue.randomClues.length).to.be.a('number');
  });

  it('should find name of category', function() {
    clue.selectRandomCategories();
    clue.getCategoryName();
    expect(clue.getCategoryName()).to.be.a('array')
  });

});
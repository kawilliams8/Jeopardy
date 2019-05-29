import chai from 'chai';
const expect = chai.expect;
import Clue from '../src/Clue.js';
import spies from 'chai-spies';
chai.use(spies);
import data from '../src/data';


describe('Clue', function() {
  let clue;
  beforeEach(function () {
    clue = new Clue(data);
    clue.selectRandomCategories();
  });

  it('should be a function', function() {
    expect(Clue).to.be.a('function');
  });

  it('should create a new instance', function() {
    expect(clue).to.be.an.instanceOf(Clue);
  });

  it('should have default properties', function() {
    expect(clue.randomCategoryNums).to.be.an('array');
    expect(clue.categoryClues).to.be.an('array');
  })

  it('should shuffle categories', function() {
    clue.selectRandomCategories();
    expect(clue.randomCategoryNums.length).to.equal(4)
  });

  it('should create an array that contains 4 numbers', function() {
    clue.selectRandomCategories();
    expect(clue.randomCategoryNums).to.be.an('array');
  });

  it('should choose all questions that match the category', function() {
    clue.findCluesForACategory();
    expect(clue.categoryClues.length).to.be.a('number');
  });

  it('should create an array with category names', function() {
    clue.getCategoryName();
    expect(clue.randomCategoryNames).to.be.a('array')
  });

});
import data from './data.js';

class Clue {
  constructor() {
    this.randomCategories = [];
    this.usedCategories = [];
    this.randomClues = [];
    // this.randomNum = 10;
  }

  // shuffleCategories() {
  //   const categories = Object.keys(data.categories).sort(() => 0.5 - Math.random());
  //   this.newCats.push(categories)
  // }


  selectRandomCategories() {
    this.randomCategories = Array(4).fill().map(() => Math.round(Math.random() * 10) + 1);
    this.usedCategories.push(...this.randomCategories);
  }

  getCategoryName() { 
    let result = this.randomCategories.map(category => {
      return Object.keys(data.categories).find(key => data.categories[key] === category);
    });
    return result;
  }

  
  findCluesForACategory() {
    let index = this.randomCategories[0];
    let findClues = data.clues.filter(id => id.categoryId === index);
    let randomClue100 = findClues.find(points => points.pointValue === 100);
    let randomClue200 = findClues.find(points => points.pointValue === 200);
    let randomClue300 = findClues.find(points => points.pointValue === 300);
    let randomClue400 = findClues.find(points => points.pointValue === 400);
    this.randomClues.push(randomClue100, randomClue200, randomClue300, randomClue400);
  }
  

  populateBoard() {
    //create method to randomize categoryID - 4 #s correlate to in the clues and pointValue
  // then we need one random clue with each pointValue per category
  //populateBoard

  }


}

export default Clue;
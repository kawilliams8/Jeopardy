import data from './data.js';

class Clue {
  constructor() {
    this.randomCategories = [];
    this.usedCategories = [];
    this.randomClues = [];
    // this.randomNum = 10;
  }

  selectRandomCategories() {
    while(this.randomCategories.length < 4){
      let num = Math.floor(Math.random() * 10) + 1;
      if(this.randomCategories.indexOf(num) === -1)
      this.randomCategories.push(num)
    }
  }

  getCategoryName() { 
    let result = this.randomCategories.map(category => {
      return Object.keys(data.categories).find(key => data.categories[key] === category);
    });
    return result;
  }

  
  findCluesForACategory() {
    let randomCategoryIds = this.randomCategories.forEach(category => {
      let result1 = data.clues.reduce((acc, clue) => {
        if (clue.categoryId === category) {
          this.randomClues.push(clue);
        }
      return acc
      }, []);
      return result1;
    });

    // let randomClue100 = findClues.find(points => points.pointValue === 100);
    // let randomClue200 = findClues.find(points => points.pointValue === 200);
    // let randomClue300 = findClues.find(points => points.pointValue === 300);
    // let randomClue400 = findClues.find(points => points.pointValue === 400);
    // this.randomClues.push(randomClue100, randomClue200, randomClue300, randomClue400);
  }

  findCluesByPointValue() {
    

  }
  

  populateBoard() {
    //create method to randomize categoryID - 4 #s correlate to in the clues and pointValue
  // then we need one random clue with each pointValue per category 
  //populateBoard

  }


}

export default Clue;
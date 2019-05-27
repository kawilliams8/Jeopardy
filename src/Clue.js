import fetch from 'cross-fetch';
import Round from './Round.js';
// import RoundTwo from './RoundTwo.js';
// import data from '../src/data';

var fetchData;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data')
  .then(function(response) {
    return response.json()
  })
  .then(function(parsedData) {
    fetchData = parsedData.data
  })
  .catch(err => console.error(err));

class Clue {
  constructor(data) {
    this.data = fetchData || data;
    this.randomCategoryNums = [];
    this.randomCategoryNames;
    this.categoryClues = [];
  }

  selectRandomCategories() {
    for (var i = 0; i <= 4; i++) {
      let num = Math.floor(Math.random() * 10) + 1;
      if (this.randomCategoryNums.indexOf(num) === -1 && this.randomCategoryNums.length < 4) {
        this.randomCategoryNums.push(num);        
      } 
    }
  }

  getCategoryName() { 
    let result = this.randomCategoryNums.map(category => {
      return Object.keys(this.data.categories).find(key => this.data.categories[key] === category).replace(/([A-Z])/g, ' $1').trim().toUpperCase();
    });
    console.log('round 1 result: ', result)
    this.randomCategoryNames = result;
  }

  // getCategoryNameRoundTwo() { 
    // let result = this.clue.roundTwoCategoryNums.map(category => {
      // return Object.keys(this.data.categories).find(key => this.data.categories[key] === category).replace(/([A-Z])/g, ' $1').trim().toUpperCase();
    // });
    
    // this.clue.randomCategoryNames = result;
  // }

  
  findCluesForACategory() {
    return this.randomCategoryNums.map(category => {
      let result = this.data.clues.reduce((acc, clue) => {
        if (clue.categoryId === category) {
          acc.push(clue);
        }
        return acc.filter((clue, index, final) => {
          return final.map(mapClue => mapClue['pointValue']).indexOf(clue['pointValue']) === index;
        });
      }, []);
      this.categoryClues.push(result);
    });
  }
}

export default Clue;
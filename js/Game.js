/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Create a constructor method inside each class.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('May God be with you'),
      new Phrase('Do what you have to Do'),
      new Phrase('Life is good'),
      new Phrase('tell me about your self'),
      new Phrase('Show me the money')
    ];
    this.activePhrase = null;
  }
  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/

getRandomPhrase(){
let RandomPhrase = Math.floor(Math.random() * this.phrases.length)  
return RandomPhrase;
}

  
}

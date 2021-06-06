/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */
   addPhraseToDisplay() {
    let Setphrase = document.getElementById('phrase');
    let splitWords = this.phrase.split('');
    
    splitWords.forEach( letter => { 

      // If there is a space
      if (letter === ' ') {
        let spaceListItem = '<li class="space"> </li>'
        // Add a space list item to to the phrase container
        Setphrase.querySelector('ul').insertAdjacentHTML('beforeend', spaceListItem);

      } else {
          let letterListItem = `<li class="hide letter ${ letter }">${ letter }</li>`
          // Add the letter list item to the phrase container 
          Setphrase.querySelector('ul').insertAdjacentHTML('beforeend', letterListItem);
      }
     })
  }

  /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
   checkLetter(chooseletter) {
    if(this.phrase.includes(chooseletter)){
        return true;
    } else {
        return false;
    }

    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
     showMatchedLetter(letter) {
        const letterReveal = document.getElementsByClassName(letter);
        if (this.checkLetter(letter)){
        for (let i = 0; i < letterReveal.length; i++) {
        letterReveal[i].classList.replace('hide', 'show');
            }
        }
    }   

  }


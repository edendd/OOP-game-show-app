/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Create a constructor method inside each class.
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("May God be with you"),
      new Phrase("Do what you have to Do"),
      new Phrase("Life is good"),
      new Phrase("Tell me about your self"),
      new Phrase("Show me the money"),
    ];
    this.activePhrase = null;
  }
  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */

  /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
}

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();

    this.activePhrase.addPhraseToDisplay();
};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const hiddenLetters = document.getElementsByClassName('hide'); // create a variable that expose hidden letters
    if (hiddenLetters.length === 0){
        return true;
    } else {
        return false;
    }
}

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife(){
    this.missed++
    const lives = document.querySelector(".tries");
    let heart = lives.firstChild;
    lives.classList.remove("tries");
    heart.src = "images/lostHeart.png";
    if (this.missed === 5) {
        this.gameOver();
   }
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon){
   this.resetGame();
    let showStartScreen = document.getElementById('overlay'); // start screen over-lay 
    let gameOverMessage = document.getElementById('game-over-message'); // tells the winer or loser
    let startButton = document.getElementsByClassName('start'); // let the game to start

   showStartScreen.style.display = '';

// conditional statement to tell the loser and winer in the game

   if (gameWon) {
       gameOverMessage.textContent = 'Great job!';
       startButton.textContent = 'Try again?';
       showStartScreen.className = 'win';
   } else {
       gameOverMessage.textContent = 'Sorry, You lost!';
       startButton.textContent = 'Try again?';
       showStartScreen.className = 'lose';
   }

}
  //Build handle interaction for the class
handleInteraction(button) {
    button.disabled = true; // button disabled
    
    let clickedLetter = this.activePhrase.checkLetter(button.textContent)

    if(!clickedLetter) {    // if wrong letter is gussed
        button.classList.add('wrong'); 
    return this.removeLife(); //if they lose call the removelife method
}   else {
    button.classList.add('chosen'); //if the letter is true
    this.activePhrase.showMatchedLetter(button.textContent);
if (this.checkForWin() === true){
    return this.gameOver(true); // wins print game over
         }
    }
}
//Reset the heart in the game after winning or losing
resetGame() {
    let ulGame = document.querySelector('#phrase ul');
    ulGame.innerHTML = '';
        
    let selectedKeys = document.getElementsByClassName('key');
    for (let i = 0; i < selectedKeys.length; i++) {
          selectedKeys[i].disabled = false;
          selectedKeys[i].classList.remove('chosen', 'wrong');
        }
    let heartGame = document.querySelectorAll('#scoreboard ol li');
    for (let i = 0; i < heartGame.length; i++) {
          if (heartGame[i].classList != 'tries') {
            heartGame[i].classList.add('tries');
            heartGame[i].firstChild.src = 'images/liveHeart.png';
        } 
    }
}
}
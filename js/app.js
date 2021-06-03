/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const button = document.getElementById("btn__reset");

let game;

button.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

const logPhrase = (phrase) => {
  console.log(`Phrase - phrase: `, phrase.phrase);
};
game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());

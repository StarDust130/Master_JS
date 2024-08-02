'use strict';

// Selecting elements
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const currentScores = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const totalScores = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];

let activePlayer, scores, isPlaying;

// Initialize game
const init = () => {
  scores = [0, 0];
  activePlayer = 0;
  isPlaying = true;

  totalScores.forEach(score => (score.textContent = 0));
  currentScores.forEach(score => (score.textContent = 0));
  players.forEach(player => player.classList.remove('player--winner'));
  players[0].classList.add('player--active');
  players[1].classList.remove('player--active');
  diceImg.classList.add('hidden');
};

init();

// Switch player
const switchPlayer = () => {
  currentScores[activePlayer].textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  players.forEach(player => player.classList.toggle('player--active'));
};

// Roll Dice Logic
const rollDice = () => {
  if (isPlaying) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${dice}.png`;
    diceImg.classList.remove('hidden');

    if (dice !== 1) {
      currentScores[activePlayer].textContent =
        Number(currentScores[activePlayer].textContent) + dice;
    } else {
      switchPlayer();
    }
  }
};

// Hold Logic
const holdDice = () => {
  if (isPlaying) {
    scores[activePlayer] += Number(currentScores[activePlayer].textContent);
    totalScores[activePlayer].textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      isPlaying = false;
      diceImg.classList.add('hidden');
      players[activePlayer].classList.add('player--winner');
      players[activePlayer].classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};

// Event listeners
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdDice);
newGameBtn.addEventListener('click', init);

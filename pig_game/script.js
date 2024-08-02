'use strict';

// Selecting elements
const roll_dice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const new_game = document.querySelector('.btn--new');

// Player - 1
const current_score_1 = document.querySelector('#current--0');
let total_score_1 = document.querySelector('#score--0');
const player1 = document.querySelector('.player--0');

// Player - 2
const current_score_2 = document.querySelector('#current--1');
let total_score_2 = document.querySelector('#score--1');
const player2 = document.querySelector('.player--1');

let activePlayer = 0; // 0 for player 1, 1 for player 2

// Roll Dice Logic
const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  document.querySelector('.dice').classList.remove('hidden');
  document.querySelector('.dice').src = `dice-${dice}.png`;

  if (dice !== 1) {
    if (activePlayer === 0) {
      current_score_1.textContent = Number(current_score_1.textContent) + dice;
    } else {
      current_score_2.textContent = Number(current_score_2.textContent) + dice;
    }
  } else {
    if (activePlayer === 0) {
      current_score_1.textContent = 0;
    } else {
      current_score_2.textContent = 0;
    }
    switchPlayer();
  }
};

roll_dice.addEventListener('click', rollDice);

// Switch player
const switchPlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    activePlayer = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
};

// Hold Logic
const holdDice = () => {
  if (activePlayer === 0) {
    total_score_1.textContent =
      Number(total_score_1.textContent) + Number(current_score_1.textContent);
    current_score_1.textContent = 0;
  } else {
    total_score_2.textContent =
      Number(total_score_2.textContent) + Number(current_score_2.textContent);
    current_score_2.textContent = 0;
  }
  switchPlayer();
};

hold.addEventListener('click', holdDice);

// New Game
function newGame() {
  current_score_1.textContent = 0;
  total_score_1.textContent = 0;
  current_score_2.textContent = 0;
  total_score_2.textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  activePlayer = 0;
}

new_game.addEventListener('click', newGame);



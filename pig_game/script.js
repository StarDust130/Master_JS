'use strict';

// Selecting elements
const roll_dice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

// Player - 1
const current_score_1 = document.querySelector('#current--0');


// Player - 2
const current_score_2 = document.querySelector('#current--1');






// Roll Dice Logic

const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  document.querySelector('.dice').classList.remove('hidden');
  document.querySelector('.dice').src = `dice-${dice}.png`;
  if (dice !== 1) {
    current_score_1.textContent = Number(current_score_1.textContent) + dice;
  } else {
    current_score_1.textContent = 0;
  }
};


roll_dice.addEventListener('click', rollDice);


// Hold Logic


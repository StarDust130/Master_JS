'use strict';

// generate random number between 1 and 20
const correctNumber = Math.trunc(Math.random() * 20) + 1;

// take value from input field
const guessNumber = document.querySelector('.guess');
console.log(guessNumber.value);

// Logic function + change styles
function checkNumber() {
  const guess = Number(guessNumber.value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === correctNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = correctNumber;
  } else if (guess !== correctNumber) {
    document.querySelector('.message').textContent =
      guess > correctNumber ? 'Too high! 📈' : 'Too low! 📉';
  }
}

// Event listener
document.querySelector('.check').addEventListener('click', checkNumber);

// Reset game
function resetGame() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.hint').textContent = '';
  document.querySelector('.score').textContent = 20;
}

// Event listener

document.querySelector('.again').addEventListener('click', resetGame);

// Highscore
let highscore = 0;

function updateHighscore() {
  if (document.querySelector('.message').textContent === 'Correct number!') {
    if (Number(document.querySelector('.score').textContent) > highscore) {
      highscore = Number(document.querySelector('.score').textContent);
      document.querySelector('.highscore').textContent = highscore;
    }
  }
}

document.querySelector('.check').addEventListener('click', updateHighscore);

// Add enter key event listener

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkNumber();
  }
});

// Add focus to input field and clear input after button click

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.guess').focus();
  document.querySelector('.guess').value = '';
});

// Add focus to input field and clear input after enter key press

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.querySelector('.guess').focus();
    document.querySelector('.guess').value = '';
  }
});

// Get Hint

const seeHint = () => {
  document.querySelector('.hint').textContent = correctNumber;
};

document.querySelector('.hint_btn').addEventListener('click', seeHint);

// Score counter

let score = 20;

const countScore = () => {
  if (document.querySelector('.message').textContent === 'Too high! 📈') {
    score--;
    document.querySelector('.score').textContent = score;
  } else if (document.querySelector('.message').textContent === 'Too low! 📉') {
    score--;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', countScore);

// Counter

 let valueX = 0;

 const updateValue = delta => {
   valueX += delta;
   document.querySelector('.values').textContent = valueX;
 };

 document
   .querySelector('.plus')
   .addEventListener('click', () => updateValue(1));
 document
   .querySelector('.minus')
   .addEventListener('click', () => updateValue(-1));
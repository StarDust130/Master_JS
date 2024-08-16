'use strict';

// Coding Challenge #1 🤙

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1) Solution

// 1. Create one player array for each team
const [players1, players2] = game.players;

// 2. Goalkeeper and field players for Bayern Munich
const [gk, ...fieldPlayers] = players1;
console.log('fieldPlayers ' + fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

// 4. Create a new array 'players1Final' containing all original players plus substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Create one variable for each odd
const { team1, x: draw, team2 } = game.odds;

// 6. Function to print goals and the number of goals scored
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  players.map(player => console.log('->' + player));
};

// Test the function with 'Davies', 'Muller', 'Lewandowski', 'Kimmich'
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// Test the function with players from game.scored
printGoals(...game.scored);

// 7. Print which team is more likely to win
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

// Object Values , key and entires

// Sets and Map introduce in ES6 in JS

// Sets are dosen't has repert value other thing same as array

// const Set = new Set([]) -> to create a set

console.log(new Set("chandrashekhar"));



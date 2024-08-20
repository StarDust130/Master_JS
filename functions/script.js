'use strict';

// Function in JS

// const flight = 'AB2123'; //! Not Change in Fn
// const stardust = {
//   name: 'Chandrashekhar', //! Change in Fn
//   passport: 12356235,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'AC1236';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 12356235) {
//     console.log('Have a Great Trip ✈️ 😊');
//   } else console.log('Wrong Passport ☠️');
// };

// // checkIn(flight, stardust);

// // console.log(flight); // Same beacuse Primative are only create copy
// // console.log(stardust); // Changed beacuse Objects store refernce to data

// // Example:
// // const flightNum = flight;
// // const passenger = joans;

// //! Summary: Passing a primative type as arguments is just crete copy that of that variable. But in Object they pass acutal refernce so they can change. 👍

// const newPAssport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
//   console.log(`New Passport: ${person.passport}`);
// };

// // newPAssport(stardust);
// // checkIn(flight, stardust);

// //! First Class and Higher-Order Functions.

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order-Functions 🙂
// const transformer = function (str, fn) {
//   console.log(`Transformer string: ${fn(str)}`);
//   console.log(`Transformer by: ${fn.name} Function`);
// };

// // transformer('JavaScript is Best', upperFirstWord);
// // transformer('JavaScript is Best', oneWord);

// //! Function that Return Functions

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeterHey = greet('Hey');

// // greeterHey('Babu Bindas 😄');

// // //! Function that Return Functions (Arrow Function)

// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// // const greeterHey = greet('Hey');

// // greeterHey('Babu Bindas 😄');

// //! The call and apply Methods

// const airIndia = {
//   airline: 'AirIndia',
//   code: 'AI',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };

// airIndia.book(521581, 'Chandrashekhar');

// const vistara = {
//   airline: 'Vistara',
//   code: 'VI',
//   booking: [],
//   //   book,
// };

// const book = airIndia.book;

// // //! .call method call book() Fn. and 1st arrgument is this keyword value
// // book.call(vistara, 19, 'Munna Thanos');

// // //! Apply method same as .call but it not recieve arrgument but a array. ### NOT USE ANYMORE ###

// // const flightData = [856, 'Jay shetty '];
// // book.apply(vistara, flightData);

// // //! MODERN ES6+ Way to do this.
// // book.call(vistara, ...flightData);

// //! Blind Method -> Help to manual set this keyword to any function

// // const bookedAirIndia = book.bind(airIndia);
// // bookedAirIndia(5224, 'Goti');

// // const addTax = rate => value => value + value + rate;

// // const addVat = addTax(0.23);

// // console.log(addVat(10));

//!  Immediately Invoked Function Expressions (IIFE)

// (() => {
//   console.log('Run Once Done! 🤑');
// })();

//!  Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();

//! Close Look at Closures with Example.

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// g();
// f();

// //! Challenge # 2 (Closures)

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();


//! Challenge # 1 Function

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
}
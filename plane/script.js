'use strict';

// Function in JS

const flight = 'AB2123'; //! Not Change in Fn
const stardust = {
  name: 'Chandrashekhar', //! Change in Fn
  passport: 12356235,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AC1236';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 12356235) {
    console.log('Have a Great Trip ✈️ 😊');
  } else console.log('Wrong Passport ☠️');
};

// checkIn(flight, stardust);

// console.log(flight); // Same beacuse Primative are only create copy
// console.log(stardust); // Changed beacuse Objects store refernce to data

// Example:
// const flightNum = flight;
// const passenger = joans;

//! Summary: Passing a primative type as arguments is just crete copy that of that variable. But in Object they pass acutal refernce so they can change. 👍

const newPAssport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(`New Passport: ${person.passport}`);
};

// newPAssport(stardust);
// checkIn(flight, stardust);

//! First Class and Higher-Order Functions.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order-Functions 🙂
const transformer = function (str, fn) {
  console.log(`Transformer string: ${fn(str)}`);
  console.log(`Transformer by: ${fn.name} Function`);
};

// transformer('JavaScript is Best', upperFirstWord);
// transformer('JavaScript is Best', oneWord);

//! Function that Return Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Babu Bindas 😄');

// //! Function that Return Functions (Arrow Function)

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');

// greeterHey('Babu Bindas 😄');

//! The call and apply Methods

const airIndia = {
  airline: 'AirIndia',
  code: 'AI',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.booking.push({ flight: `${this.code}${flightNum}`, name });
  },
};

airIndia.book(521581, 'Chandrashekhar');

const vistara = {
  airline: 'Vistara',
  code: 'VI',
  booking: [],
  //   book,
};

const book = airIndia.book;

//! this .call method call book() Fn. and 1st arrgument is this keyword value
book.call(vistara, 19, 'Munna Thanos');

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

transformer('JavaScript is Best', upperFirstWord);

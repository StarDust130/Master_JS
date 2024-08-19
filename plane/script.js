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

checkIn(flight, stardust);

console.log(flight); // Same beacuse Primative are only create copy
console.log(stardust); // Changed beacuse Objects store refernce to data

// Exaample:
// const flightNum = flight;
// const passenger = joans;

'use strict';

// Function in JS

const flight = 'AB2123';
const stardust = {
  name: 'Chandrashekhar',
  passport: 12356235,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AC1236';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 12356235) {
    console.log('Have a Great Trip ✈️ 😊');
  }
};

checkIn(flight, stardust);

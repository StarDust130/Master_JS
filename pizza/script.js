'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ ...obj }) {
    console.log(`${obj.starterIndex}`);
  },
};

restaurant.orderDelivery({ starterIndex: 1, mainIndex: 2, otherIndex: 3 });

//! Array
// Receive 2 return value from a function.
// const [starter, main] = restaurant.order(2, 0);

// console.log(starter, main); // Garlic Bread Pizza

// // Nested Destructuring Array
// const nested = [2, 4, [5, 6, [7]]];

// const [val1, , [val2, , [val3]]] = nested;

// console.log(val1, val2, val3); // 2 5 7

// // Default Array

// const [p = 1, q = 3, r = 5] = [8, 9];
// console.log(p, q, r); // 8 9 5

//! Object

const { name: naam, openingHours, categories, cat = 'bat' } = restaurant;

console.log(naam, openingHours, categories, cat);

// Mutating Variable

let a = 111;
let b = 222;
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

({ a, b } = obj);

console.log(a, b);

// Nested Objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

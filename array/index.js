//! Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

//? slice: -> Divide Array into Part(Create Copy of Array)
// console.log(arr.slice(1));

//? splice: -> delete part from orginal Array
// console.log(arr.splice(2));
// console.log(arr);

//? Reverse: -> reverse it. (Mutate)

// console.log(arr.reverse());

//? Concat: -> Add two Array.

const arr2 = ['x', 'y', 'z'];
// console.log(arr.concat(arr2));
//            OR
// console.log([...arr, ...arr2]);

//? Join: -> Joins all array elements into a string.

// console.log(arr.join("-"));

//! The (at) Method.

// console.log(arr[0]);  -> We can do same thing with (at):

// console.log(arr.at(-1));

//! forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const element of movements) {
//   if (element > 0) {
//     console.log(element);
//   }
// }

// movements.forEach((movement , index ) => {
//   movement > 0 && console.log(` ${index +1}: ${movement} deposited`);
// });


// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsJuliaReal = [...dogsJulia.slice(1, -2)];

const dogsKate = [3, 5, 2, 12, 7];

const checkDogs = (dogsData1, dogsData2) => {
  const totalDogs = [...dogsData1, ...dogsData2];
  let adult = 0;
  let puppy = 0;

  totalDogs.forEach((dog, index) => {
    if (dog > 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dog} years old`
      );
      adult += 1;
    } else {
      console.log(`Dog ${index + 1} is still a puppy 🐶`);
      puppy += 1;
    }
  });
  console.log(`TOTAL Adult Dog : ${adult} `);
  console.log(`TOTAL Puppy Dog : ${puppy} `);
};

// checkDogs(dogsJuliaReal, dogsKate);

// console.log(dogsKate.reduce((acc, cv) => acc + cv));

dogsKate.map(dog => console.log(dog));

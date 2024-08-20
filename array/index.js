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

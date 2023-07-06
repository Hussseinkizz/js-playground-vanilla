let numbersArray = [1, 2, 3, 4];
let fruitsArray = ['Apple', 'Banana', 'Cherry', 'Orange'];
let studentsArray = [
  {
    id: 1,
    name: 'Kizz',
  },
  {
    id: 2,
    name: 'Kellen',
  },
  {
    id: 3,
    name: 'John',
  },
];

let name = 'john doe'; // string manipulation

// * concat method
// let newArray = fruitsArray.concat('Mango');
// console.log(fruitsArray, newArray);

// * length method
// fruitsArray.length = 1;
// console.log(fruitsArray);

// * filter method
// let result = numbersArray.filter(function (number) {
//   return number < 4;
// });

// example 2
// let result = studentsArray.filter(function (student) {
//   return student.id === 2;
// });

// console.log(result);

// * find method
// let result = studentsArray.find(function (student) {
//   return student.id === 2;
// });

// find method returns only first result
// let result = studentsArray.find(function (student) {
//   return student.id < 3;
// });

// console.log(result);

// * find index method

// let result = studentsArray.findIndex(function (student) {
//   return student.id < 3;
// });

// console.log(result);

// * forEach method
// studentsArray.forEach(function (student) {
//   student.name = 'pig';
// });
// console.log(studentsArray);

// * includes method
// let quote = 'one by one makes bundle';
// let result = quote.includes('bundle');
// let result = fruitsArray.includes('Mango');
// console.log(result);

// * indexOf method
// let result = numbersArray.indexOf('Cherry');
// console.log(result);

//  * map method
// let newArray = numbersArray.map(function (number) {
//   return number + 1;
// });
// console.log(numbersArray, newArray);

// * reduce method
let totalSum = numbersArray.reduce(function (sum, number) {
  console.log(`The current sum is ${sum} and the current number is ${number}`);
  return sum + number;
}, 0);
console.log(totalSum); // 10

// mutable  - changeable - let
// immutable - unchangeable - const

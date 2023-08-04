import './style.css';
import './util';
const reverseStr = (str) => str.split('').reverse().join('');
const takeFirstChar = (str) => str[0];
const convertToUpperCase = (str) => str.toUpperCase();

const add = (x) => (y) => x + y;

// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }

//closure

//currying
const addOne = add(1); //closure
const sum1 = addOne(10);
const addTwo = add(2); //closure
const sum2 = addTwo(10);
// console.log('sum1', sum1);
// console.log('sum2', sum2);

// const pipeline = function (...fns) {
//   return function (value) {
//     let result = value;
//     console.log('original value', value);
//     fns.forEach((fn) => {
//       result = fn(result);
//       console.log('result', result);
//     });
//     return result;
//   };
// };

const pipeline =
  (...fns) =>
  (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

// declarative programming
const capitalizeLastChar = pipeline(
  reverseStr,
  takeFirstChar,
  convertToUpperCase
);
// function capitalizeLastChar(str) {
//   return convertToUpperCase(takeFirstChar(reverseStr(str)));
// }

const result = capitalizeLastChar('Abc');

// console.log(result);

//RxJS - Functional Reactive Programming

/**
 * Destructuring of arrays allows unpacking of array values into distinct variables
 */
var dates = [3, 15, 23, 24];
var [a, ,b] = dates;
console.log(a, b);


/**
 * Array destructuring with the spread operator
 */
let x, y, values;

[x, y, ...values] = [1, 2, 'Jorge', 'Maja', 'Sofia', 'David'];
console.log(x);
console.log(values);
console.log(values[2]);

/**
 * Finding an array index that matches predicate
 * Returns only first matching index
 */
function isDigit(val) {

  let digits = /[0-9]/;

  return digits.test(val);

}

let namesAndNums = ['Maja', 'Sofia', 'Jorge', 'David', '3423'];

console.log(namesAndNums.findIndex(isDigit)); // Logs 4

/**
 * Finding in an array
 * Returns only first matching value
 */

let moreNamesAndNums = ['Marc', 'Yoshua', 'Ian', '32', 'John', '12'];

console.log(moreNamesAndNums.find(isDigit)); // Logs 32

/**
 * "Filling" an array with values
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.fill(0, 4, 8);

console.log(arr); // Logs [1, 2, 3, 4, 0, 0, 0, 0]

/**
 * Array "mapping", creates a new array with results of calling provided function on every element
 */
let singles = [1, 2, 3 , 4];

let doubles = singles.map(x => x * 2);

console.log(doubles);

/**
 * Array filtering, in this case based on palindromes
 */
let words = ['abracadabra', 'krk', 'neveroddoreven', 'boston'];

function palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 

  return reverseStr === lowRegStr;
}

let palindromes = words.filter(x => palindrome(x));

console.log(palindromes);

/**
 * Copying arrays with the spread operator
 */

 let arr1 = ['Jorge', 'Maja'];

 let arr2 = [...arr1];

 arr2.push('Sofia');

 console.log(arr1);
 console.log(arr2);

 /**
  * Destructuring objects
  * Pattern for simulating named arguments
  */
function destructuredSubtraction({x, y} = {}) {
  return (x - y);
}

console.log(destructuredSubtraction({x: 10, y: 5})); // Logs 5
console.log(destructuredSubtraction({y: 5, x: 25})); // Logs 20


/**
 * Array destructuring
 * Pattern for assigning values to compound structures
 */

function getFib() {
  return [1, 2, 3, 5, 8];
}

var [a, b, c, d, e] = getFib();

console.log(c); // Logs 3

/**
 * Generator functions are functions which can be exited and later re-entered
 */
// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// let gen = generator(10);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 20

/**
 * Using generators
 */
// function* namerator() {
  
//   let index = 0;
//   while (index < index + 1) {
//     yield `Jorge is the best`;
//     yield index++;
//   }
// }

// let jorge = namerator();
// console.log(namerator.next());
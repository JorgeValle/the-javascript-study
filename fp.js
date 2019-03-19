/**
 * Following ideas mostly from Kyle Simpsons "Functional-Light Javascript"
 */

 /**
  * Arguments are the values you pass in, parameters are the named variables inside the function.
  * x and y are the argument of the function foo()
  */
 function foo(x, y) {
   return x + y;
 }

foo(3, 4);  // Returns 7 - in this case 3 and 4 are the arguments - the actual values

/**
 * In JavaScript, you can call functions with less arguments than the function expects, but the missing parameter will just be undefined
 */
function bar (x, y, z) {

  console.log(typeof x); // number
  console.log(typeof y); // number
  console.log(typeof z); // undefined

  return x + y + z;
}

bar(4, 5);

/**
 * AS of ES6, we can declare default parameter values
 */
function baz(x = 3) {
  console.log(x);
}

baz(); // Logs 3
baz('Test'); // Logs 'test'
baz(312); // Logs 312

/**
 * We can also count the arity - the expect parameters - of a function
 */
function faz(x, y, z) {
}

faz.length; // Returns 3 - the arity of the faz() func

/**
 * Counting the number of arguments the function received
 * As of ES5, arguments is considered deprecated
 * NEVER access arguments positionally like arguments[1] - you can't count on that order
 */
function bez(x, y ,z) {
  console.log(arguments.length);
}

bez(3, 4); // Logs 2, the number of arguments function received

/**
 * The spread operator, allows us to declare function with remaining arguments in a real array
 */
function boz(x, ...args) {
  console.log(x, args);
}

boz(1, 2); // Logs 1, [2]
boz(1, 2, 3, 4) // Logs 1, [2, 3, 4]

// So if you really want to design a function that can account for an arbitrary number of arguments, use ..args!

/**
 * We can also use ..args as the sole parameters in a function declaration
 */
function faz(...args) {
  console.log(args);
}

faz(1); // Logs [1]
faz('Jorge', 'Maja', 'Sofia', 'David'); // Logs ['Jorge', 'Maja', 'Sofia', 'David']

/**
 * Using spread operator in the call site!
 */
function fiz(...args) {
  console.log('fiz:' + args[3]);
}

var arr = [1, 2, 3, 4, 5];

fiz(...arr); // Logs 4

// The ... operator in a parameter list we said it gathered arguments, in an argument list it spreads them out

/**
 * Currying a sum. Pay particular attention to the call-site.
 */
function curriedSum(a) {
  return function(b) {
    console.log(parseInt(a) + parseInt(b));
  }
}

curriedSum(1)(182);

/**
 * Pattern for naming arguments
 * Arguments cease to be positional
 */
function namedArgs({noun, verb} = {}) {
  return `${noun} loves to ${verb} cheese`;
}

console.log(namedArgs({noun: 'Pusa', verb: 'eat'})); // Logs Pusa loves to eat cheese
console.log(namedArgs({verb: 'buy', noun: 'Jorge'})); // Logs Jorge loves to buy cheese

/**
 * Points-free
 */
function triple(x) {
  return x * 3;
}

console.log([1, 2, 3, 4, 5].map(triple));

/**
 * Function composition
 * Passing output of a function as input of another function
 */
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

console.log(mul(add(1,2), 4));

let result = add(10, 5);

console.log(mul(result, 2));

// <----- Order of operations is right to left, or innter to outer

/**
 * Side effects: when changes are made by a function to a variable outside of itself
 * Side-effecting damages readability and comprehension of program
 */

let y = 0;

function causeSideEffect(x) {
  y = x * 2;
}

causeSideEffect(3);

console.log(y); // Logs 6

var w = 1;

/**
 * Side causes
 * When the output of a function is affected by values changed outside of it
 */
function withSideCause(x) {
  return x + w;
}

console.log(withSideCause(3)); // Logs 4

w = 3;

console.log(withSideCause(3)); // Logs 6

/**
 * Idempotence: feeding output back into function repeatedly doesn't change output ever
 * Non-idempotent operations change state every time
 */
function idempotent(x) {
  return Math.ceil(x);
}

console.log('Idempotent operation:');
console.log(idempotent(3.14)); // Logs 4
console.log(idempotent(idempotent(idempotent(3.14)))); // Logs 4

/**
 * Pure functions: functions that cause no side causes, or side effects
 * All inputs and outputs are "direct"
 */
function pureFunc(x, y, z) {
  return (2 * x) + (3 * y) - (5 - z); 
}

console.log(pureFunc(3, 4, 5));

/**
 * Impure functions return different values every time they're called, or they cause different side effects, possibly changing program state
 * 
 */
function impureGetDate() {
  return Date.now();
}

console.log(impureGetDate());

/**
 * Referential transparency
 */
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
  console.log(args[3]);
}

var arr = [1, 2, 3, 4, 5];

fiz(...arr); // Logs 4

// The ... operator in a parameter list we said it gathered arguments, in an argument list it spreads them out

/**
 * Currying
 */
function curry(a) {
  return function(b) {
    console.log(a + b);
  }
}

curry(1, 182);
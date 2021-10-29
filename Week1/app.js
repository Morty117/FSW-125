// the common design is to set whatever you are requiring into a variable

// 2.
// const importObj = require('./math')

// console.log(importObj)//returns the function or we can use () to invoke the function
// console.log(importObj.greet) // functional express value of the greet property 
// console.log(importObj.greet()) // returns string hello world 


// set the entire require as a value to a new variable of Math Object
// const mathObj =  require('./math')

// console.log(mathObj.sum(5, 10))
// console.log(mathObj.subtract(6, 6))
// console.log(mathObj.multiply(8, 9))
// console.log(mathObj.division(7, 7))

const Greet = require('./math')

// in order to interact with the constructor function, we need to instantiate a new object class
const greetr = new Greet() // construtor function syntax for invoking functions

console.log(Greet)
console.log(greetr)
console.log(greetr.greet())

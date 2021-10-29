// Module.exports is an empty object where we fill in with our code and pull it in a require() function call in another file
// We do not use import/export syntax like in React because Node and by extension express has not been stabily put into ES6 syntax

// export the functionality from this files with module.exports
// import the functionality in another file with require

// 1. setting module exports equal to a function module.exports = fx
// named & anonymous 
// module.exports = function(a, b) {
//     return a + b
// }

// 2. add function expressions as properties
// create a greet property and set it to our module exports
// module.exports.greet = function(){
//     console.log('hello')
// }



const sum = (a, b) => {
    return a + b
}


const subtract = (c, d) => {
    return c - d
}


const multiply = (e, f) => {
    return e * f
}


const division = (g, h) => {
    return g / h
}


// we can set our export to an object literal
// object literals is how we define objects in JS, no need for NEW
// called literals because they literally what we are talking about
module.exports = {
    // then we define our own properties

    sum, // this is ES5 syntax sum: sum,
    subtract, // this is ES5 syntax subtract: sub,
    multiply, // this is ES5 multiply: mul,
    division,  // this is ES5 syntax division: div
};



// 4. set module exports equal to a function constructor

function Greetr() {
    this.greeting = 'hello world',
    this.greet = function(){
        console.log(this.greeting)
    }
}

module.exports = Greetr
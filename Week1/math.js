// Module.exports is an empty object where we fill in with our code and pull it in a require() function call in another file
// We do not use import/export syntax like in React because Node and by extension express has not been stabily put into ES6 syntax

const sum = (a, b) => {
    return a + b
}

// export the functionality from this files with module.exports
// import the functionality in another file with require

module.exports = sum;
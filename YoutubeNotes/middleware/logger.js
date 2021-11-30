const moment = require('moment')

// Middleware function
// you ALWAYS want to use next in a middleware function so it will call the next middleware in the event that one fails
const logger = (req, res, next) => {
    // this will print out the http://localhost:5000undefined
console.log(`${req.protocol}://${req.get('host')}${req.originalURL}:${moment().format()}`)
next()
}

module.exports = logger

// npm i moment gives a date an time of the changes made
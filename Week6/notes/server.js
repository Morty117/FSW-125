const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = 9000

const bookRouter =  require('./routes/bookRouter')
const tvShowRouter =  require('./routes/tvShowRouter')

// middlware
app.use(express.json())
app.use(morgan('dev'))

app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

// Error Handling
// When we pass in these parameters in this order, it signals express that it is an error handler
// in Postman the get returns nothing but ultimately its saying undefined with console.log(err)
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

// Error Handling refers to how Express catches and processes errors that ocvur both synchronously/asynchronously
// Express comes with default handler so we don't have to write one

// Best method of remembering status codes
// 1xx - hold on(information)
// 2xx - here you go(successful)
// 3xx - go away(redirects)
// 4xx - you messed up(client error)
// 5xx - I messed up(server error)
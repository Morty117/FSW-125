const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = 9000

const bookRouter =  require('./routes/bookRouter')
const tvShowRouter =  require('./routes/tvShowRouter')

// middlware
app.use(express.json())
// Morgan middleware gives a log of the time it took to load and the route path used
app.use(morgan('dev'))

app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

// proxy is a configuration of package.json that holds the url given when the server starts up 
// what it does, is any outgoing request from our client directory goes directly into the http://localhost:9000 
// this bypasses Cross Origin Resource Sharing (CORS)
// so instead installing any CORS packages/interactions, we can just add the proxy in the client package.json to bypass
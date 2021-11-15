const express = require('express')
const app = express()

const PORT = 3000

// uuid
const { v4: uuidv4} = require('uuid')

const bookRouter =  require('./routes/bookRouter')
const tvShowRouter =  require('./routes/tvShowRouter')


// Application Level Middleware
// Middleware intercepts data along a data flow and executes some type of code along that, once setup, it will infect all code setup on the Middleware
// Middleware functions in Express are functions that have access to the request, response objects and the next Middleware functions
// Middleware functions perform these tasks: Execute any code, Make changes to the request and the response objects, End the request-response cycle, Call the next Middleware function
// in the stack
// If the Middleware function does not end the request-response cycle, it must call next to pass control to the next Middleware function

app.use(express.json()) // for parsing application/json 

// JSON.parse()
// JSON.stringify()

// the request body object is undefined until we populate it with a body.parsing Middleware, Express.json is that parsing Middleware
// the main job is to parse incoming requests with JSON payloads and is based on the body parser module 

// fake data
// let books = [
//     {title: "Devil And The White City", author: "Erik Larson", _id: uuidv4()},
//     {title: "Le Transperceniege", author: "Jacques Lob", _id: uuidv4()},
//     {title: "American Gods", author: "Neil Gaiman", _id: uuidv4()},
//     {title: "Active Imagination", author: "Carl Jung", _id: uuidv4()}
// ]

// let tvShows = [
//     {title: "The Walking Dead", channel: "AMC", _id: uuidv4()},
//     {title: "Vikings", channel: "History", _id: uuidv4()},
//     {title: "How I Met Your Mother", channel: "FOX", _id: uuidv4()},
//     {title: "Brooklyn 99", channel: "FOX", _id: uuidv4()}
// ]

// tvShows camelCase
// tvshows lowercase
// tv_shows underscore
// tv-shows kabobcase, hyphens are associated with spaces. When we create a route we want them to be 2 things: easily indexed, easily readable


app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)


// POST to add a new resource
app.post('/books', (req, res) => {
    // Extracting our new req.body
    const newBook = req.body
    newBook._id = uuidv4()
    books.push(newBook)
    
    console.log(books)
    res.send(`Successfully added ${newBook.title} to the database`)
})

app.post('/tv-shows', (req, res) => {
    // Extracting our new req.body
    const tvShow = req.body
    tvShow._id = uuidv4()
    tvShows.push(tvShow)
    
    console.log(tvShows)
    res.send(`Successfully added ${tvShows.title} to the database`)
})

// GET all route
app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/tv-shows', (req, res) => {
    res.send(tvShows)
})

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

// _id is a field required in every MongoDB document. The _id field must have a unique value and is the document's primary key
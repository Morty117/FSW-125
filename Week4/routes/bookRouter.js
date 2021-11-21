const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let books = [
    {title: "Devil And The White City", author: "Erik Larson", genre: "fiction", _id: uuidv4()},
    {title: "Le Transperceniege", author: "Jacques Lob", genre: "non fiction", _id: uuidv4()},
    {title: "American Gods", author: "Neil Gaiman", genre: "science fiction", _id: uuidv4()},
    {title: "Active Imagination", author: "Carl Jung", genre: "philosphy", _id: uuidv4()}
]

// Route Parameters are place holders like in a JS function
// req.params is a property of our request object and contains key value pairs
// Route Path: /users/:userId/books/:bookId Request
// :userId and :bookId are palceholders for our URL endpoint, so the value would be 34 and 8989
// URL Example: http://localhost:3000/users/34/books/8989
// so req.params: {"userId": "34", "bookId": "8989"}

// a route parameter is never null or undefinded
// a route parameter is always a string with positive length

bookRouter
    .get('/', (req, res) => {
        res.send(books)
    }) // GET all

    .get('/:bookId', (req, res) => {
        // console.log(req.params)
        const bookId = req.params.bookId
        const singularBook = books.find(book => book._id === bookId)

        res.send(singularBook)
    }) // GET one

    .get('/search/genre', (req, res) => {
        console.log(req.query)

        const bookId = req.query.genre
        const filterBooks = books.filter(book => book.genre === bookId)
        res.send(filterBooks)
    })

    .post('/', (req, res) => {
        const newBook = req.body
        newBook._id = uuidv4()
        books.push(newBook)

        console.log(books)
        res.send(`Successfully added ${newBook.title} to the database`)
    }) // POST one

    .delete('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        books.splice(bookIndex, 1)

        res.send('Resource successfully deleted')
    }) // DELETE one

    .put('/:bookId', (req, res) => {
        const bookId = req.params.bookId
        const bookIndex = books.findIndex(book => book._id === bookId)
        Object.assign(books[bookIndex], req.body)
        // Object.assign() takes in 2 parameters - original object or out target and the second is the source or new object to update


        res.send(`Resource successfully updated successfully`)
    })  // PUT one

module.exports = bookRouter
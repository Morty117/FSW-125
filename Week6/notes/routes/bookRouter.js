const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let books = [
    {title: "Devil And The White City", author: "Erik Larson", genre: "fiction", _id: uuidv4()},
    {title: "Le Transperceniege", author: "Jacques Lob", genre: "non fiction", _id: uuidv4()},
    {title: "American Gods", author: "Neil Gaiman", genre: "science fiction", _id: uuidv4()},
    {title: "Active Imagination", author: "Carl Jung", genre: "philosphy", _id: uuidv4()}
]

// responses are chainable so we can add it all together like this res.status(200).send(books)
bookRouter
    .get('/', (req, res) => {
        res.status(200).send(books)
    })


    .get('/:bookId', (req, res, next) => {
        // console.log(req.params)
        const bookId = req.params.bookId
        const singularBook = books.find(book => book._id === bookId)

        if(!singularBook) {
            const error = new Error('This item was not found')
            return next(error)
        }

        res.status(200).send(singularBook)
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

        res.status(201).send(newBook)
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
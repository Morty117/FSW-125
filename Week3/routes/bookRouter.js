const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let books = [
    {title: "Devil And The White City", author: "Erik Larson", _id: uuidv4()},
    {title: "Le Transperceniege", author: "Jacques Lob", _id: uuidv4()},
    {title: "American Gods", author: "Neil Gaiman", _id: uuidv4()},
    {title: "Active Imagination", author: "Carl Jung", _id: uuidv4()}
]


// routes
// leaving the endpoint will stop the redundancy of going to /books/books
bookRouter.get('/', (req, res) => {
    res.send(books)
})

bookRouter.post('/books', (req, res) => {
    // Extracting our new req.body
    const newBook = req.body
    newBook._id = uuidv4()
    books.push(newBook)
    
    console.log(books)
    res.send(`Successfully added ${newBook.title} to the database`)
})

module.exports = bookRouter
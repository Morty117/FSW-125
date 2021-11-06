const express = require('express')

const app = express()
const PORT = 3000

let movies = [
    {title: "John Wick", date: 2014},    
    {title: "John Wick: Chapter 2", date: 2017},    
    {title: "John Wick: Chapter 3 - Parabellum", date: 2019}    
]

let games = [
    {title: "Escape from Tarkov", rating: "Mature"},
    {title: "God of War", rating: "Mature"},
    {title: "Little Big Planet", rating: "Everyone"}
]

let books = [
    {title: "The Outsiders", date: 1967},
    {title: "Halo: The Fall Of reach", date: 2001},
    {title: "The Great Gatsby", date: 1925}
]

app.get('/movies', (req, res) => {
    res.send(movies)
})
app.get('/games', (req, res) => {
    res.send(games)
})
app.get('/books', (req, res) => {
    res.send(books)
})

app.listen(PORT, () => {
    console.log(`App started on port: ${3000}`)
})
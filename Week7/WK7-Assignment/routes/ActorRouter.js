const express = require('express')
const actorRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let actors = [
    {first: "Tom", last: "Hanks", alive: true, movies: ["Saving Private Ryan", "Cast Away", "Forrest Gump"], age: 65, _id: uuidv4()},
    {first: "Arnold", last: "Schwarzenegger", alive: true, movies: ["Predator", "Commando", "Terminator 2"], age: 74, _id: uuidv4()},
    {first: "Keanu", last: "Reeves", alive: true, movies: ["John Wick", "The Matrix", "Street Kings"], age: 57, _id: uuidv4()},
]

actorRouter
    .get('/', (req, res) => {
        res.status(200).send(actors)
    })

    .get('/:actorId', (req, res, next) => {
        const actorId = req.params.actorId
        console.log(actorId)
        const singleActor = actors.find(actor => actor._id === actorId)

        if(!singleActor){
            const error = new Error('This actor was not found')
            return next(error)
        }

        res.status(200).send(singleActor)
    })

    .get('/search', (req, res) => {
        
    })

module.exports = actorRouter
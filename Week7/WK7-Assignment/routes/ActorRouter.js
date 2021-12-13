const express = require('express')
const actorRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let actors = [
    {first: "Tom", last: "Hanks", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3410K_E-KFTkTZsjZlVviBUtIpa7OwWnCW9ZbCvGDO2yaAeaYVJw_87IIPP7RsfAHlVo&usqp=CAU", alive: true, movies: ["Saving Private Ryan", "Cast Away", "Forrest Gump"], age: 65, _id: uuidv4()},
    {first: "Arnold", last: "Schwarzenegger", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBPuH4tl7QqpoI5bKrFjNZ_UKjlYDgLVZFw&usqp=CAU", alive: true, movies: ["Predator", "Commando", "Terminator 2"], age: 74, _id: uuidv4()},
    {first: "Keanu", last: "Reeves", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjlAJXlsAHTBXllnZFTg5D9cFrDhfHdE76LlluU7vM8XGmx34ACHcBBb12a4Xa6nSRjA&usqp=CAU", alive: true, movies: ["John Wick", "The Matrix", "Street Kings"], age: 57, _id: uuidv4()},
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

    .get('/search/searchtype', (req, res) => {

        const searchType = req.query.type

        let filterActor
        
        switch(searchType) {
            case 'first':
                filterActor = actors.filter(actor => actor.first === req.query.q)
                break;
            case 'last':
                filterActor = actors.filter(actor => actor.last === req.query.q)
                break;
            case 'alive':
                filterActor = actors.filter(actor => actor.alive === req.query.q)
                break;
            case 'movies':
                filterActor = actors.filter(actor => actor.movies === req.query.q)
                break;
            case 'age':
                filterActor = actors.filter(actor => actor.age === req.query.q)
                break;
        }

        res.send(filterActor)
    })

    .post('/', (req, res) => {
        const newActor = req.body
        newActor._id = uuidv4()
        actors.push(newActor)

        res.status(201).send(newActor)
    })

    .put('/:actorId', (req, res) => {
        const actorId = req.params.actorId
        const actorIndex = actors.findIndex(actor => actor._id === actorId)
        Object.assign(actors[actorIndex], req.body)

        res.send("Actor was updated")
    })

    .delete('/:actorId', (req, res) => {
        const actorId = req.params.actorId
        const actorIndex = actors.findIndex(actor => actor._id === actorId)
        actors.splice(actorIndex, 1)

        res.send("Actor was deleted")
    })

module.exports = actorRouter
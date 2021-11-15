const express = require('express')
const bountyHunterRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let bounties = [
    {first: 'Obi-Wan', last: 'Kenobi', living: false, bountyAmount: 1000, type: 'jedi', _id: uuidv4()},
    {first: 'Sheev', last: 'Palpatine', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Anakin', last: 'Skywalker', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Ahsoka', last: 'Tano', living: true, bountyAmount: 6000, type: 'jedi', _id: uuidv4()}
]

bountyHunterRouter.get('/', (req, res) => {
    res.send(bounties)
})

bountyHunterRouter.post('/', (req, res) => {
    const bounty = req.body
    bounty._id = uuidv4()
    bounties.push(bounty)

    console.log(bounties)
    res.send(`Successfully added ${bounties.title} to the database`)
})

module.exports = bountyHunterRouter
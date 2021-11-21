const express = require('express')
const bountyHunterRouter = express.Router()
const { v4: uuidv4} = require('uuid')

let bounties = [
    {first: 'Obi-Wan', last: 'Kenobi', living: false, bountyAmount: 1000, type: 'jedi', _id: uuidv4()},
    {first: 'Sheev', last: 'Palpatine', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Anakin', last: 'Skywalker', living: false, bountyAmount: 0, type: 'sith', _id: uuidv4()},
    {first: 'Ahsoka', last: 'Tano', living: true, bountyAmount: 6000, type: 'jedi', _id: uuidv4()}
]

bountyHunterRouter
    .get('/', (req, res) => {
        res.send(bounties)
    })

    .post('/', (req, res) => {
        const bounty = req.body
        bounty._id = uuidv4()
        bounties.push(bounty)

        console.log(bounties)
        res.send(`Successfully added ${bounties.title} to the database`)
    })

    .delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)

        res.send('Bounty completed')
    })

    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        Object.assign(bounties[bountyIndex], req.body)

        res.send('Bounty updated')
    })

module.exports = bountyHunterRouter
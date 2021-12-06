const express = require('express')
const inventoryRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let inventoryItems = [
    {name: "banana", type: "food", price: 200, _id: uuidv4()},
    {name: "pants", type: "clothing", price: 2500, _id: uuidv4()},
    {name: "basketball", type: "toy", price: 1000, _id: uuidv4()},
    {name: "rockem-sockem robots", type: "toy", price: 1500, _id: uuidv4()},
    {name: "shirt", type: "clothing", price: 800, _id: uuidv4()},
    {name: "soup", type: "food", price: 300, _id: uuidv4()},
    {name: "flour", type: "food", price: 100, _id: uuidv4()}
]

inventoryRouter
    .get('/', (req, res) => {
        res.send(inventoryItems)
    })
    .get('/:inventoryId', (req, res) => {
        const inventoryId = req.params.inventoryId
        const item = inventoryItems.find(items => items._id === inventoryId)

        res.send(item)
    })
    .get('/search/name', (req, res) => {
        const inventoryId = req.query.name
        const filterInventory = inventoryItems.filter(item => item.name === inventoryId)
        
        res.send(filterInventory)
    })
    .get('/search/type', (req, res) => {
        const inventoryId = req.query.type
        const filterInventory = inventoryItems.filter(item => item.type === inventoryId)
        
        res.send(filterInventory)
    })
    .get('/search/price', (req, res) => {
        const inventoryId = req.query.price
        const filterInventory = inventoryItems.filter(item => item.price === inventoryId)
        
        res.send(filterInventory)
    })

module.exports = inventoryRouter
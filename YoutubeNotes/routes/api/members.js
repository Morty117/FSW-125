// We are using Router to route the members file to the server.js file
const express = require('express')
const router = express.Router()
const members = require('../../Members')

// this GETs all members
router.get('/', (req, res) => res.json(members))

// this GETs a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === req.params.id)
    
    if(found){
        // res.send(req.params.id) - this returns only the id
        res.send(members.filter(member => member.id === req.params.id))
    }  else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
})

module.exports = router
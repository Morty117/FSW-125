const { v4: uuidv4} = require('uuid')

const members = [
    {id: uuidv4(), name: 'John Doe', email: 'john@gmail.com', status: 'active'},
    {id: uuidv4(), name: 'Jane Doe', email: 'jane@gmail.com', status: 'active'},
    {id: uuidv4(), name: 'Jimmy Doe', email: 'jimmy@gmail.com', status: 'active'},
    {id: uuidv4(), name: 'Jose Doe', email: 'jose@gmail.com', status: 'active'}
]

module.exports = members
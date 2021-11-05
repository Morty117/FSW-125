// in order to use an external node module, we create a variable
// this is used as a container to store the value of that node module
// but instead of a relative path to the file, we can just require the node module package
const express = require('express')

// we need to instantiate a new server using express
// common convention to name our app/instantiated express server as app
// we need to invoke express as our function
const app = express()

const PORT = 3000

// This is the format until we learn databases
let users = [
    {name: 'Anthony', location: 'El Paso'},
    {name: 'Anthony', location: 'El Paso'},
    {name: 'Anthony', location: 'El Paso'},
    {name: 'Anthony', location: 'El Paso'},
]

// we making fake data and then we are going to interact with that fake data

// Express.js true power comes from routing, which refers to determining how an application responds to a client request to a particular endpoint
// Each route can have one more handler functions, which will be executed when the route is matched

// app.METHOD(PATH, HANDLER)
// App is the instance of Express, METHOD is an HTTP method(GET, POST, PUT, DELETE), PATH is a path on the server that will be creating our endpoint, HANDLER is the callback function
// when the route is matched

// handler functions take in streams(req, res, next)
app.get('/users', (req, res) => {
    res.send(users)
})
// Express is seralizing our data into JSON because it needs to be sent over the web

//console.log(app)
// the method we need to start our application is .listen()
// listen takes in 2 arguments: court which is a memory space on your machine that runs processees(like React, when starting your project and going to 9.0.9.0), we can define the port
// of our server(conventionally we use 3000 as default)
// It also takes a call back function, which is an function that is passed in as an argument to another function

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${3000}`)
})
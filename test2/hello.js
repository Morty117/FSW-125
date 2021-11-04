// load HTTP module

const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

// create HTTP server
const server = http.createServer(function(req, res){

    // set the response http header with HTTP status and Content type
    res.writeHead(200, {'COntent-type' : 'text/plain'})

    // send the response body 'Hello World'\
    res.end('Hello World\n')
})

// Prints a log once the server starts listening
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`)
})
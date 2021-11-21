const express = require('express')
const app = express()
const { v4: uuidv4} = require('uuid')

const PORT = 3000

const bookRouter =  require('./routes/bookRouter')
const tvShowRouter =  require('./routes/tvShowRouter')

app.use(express.json())


app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

// server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})

// Query parameters are query strings used to filter results
    // begins with a '?'
    // built of key:value pairs
    // Multiple queries seperated with the '&'
// URL example: https://stackabuse.com/?page=2&limit=3
// Query parameters are the actual key-value pairs like page and limit with values of 2 and 3

// _id is a field required in every MongoDB document. The _id field must have a unique value and is the document's primary key
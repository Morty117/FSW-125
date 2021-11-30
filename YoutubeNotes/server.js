const logger = require('./middleware/logger')

const express = require('express')
// the path module is node.js module to deal with file paths
const path = require('path')

// initialize express through a var
const app = express()

// app.use is for when we want to use middleware
// Init Middleware
app.use(logger)

// set static folder
// app.use is for when we want to use middleware
// this method set the folder "public" as our static folder and we do NOT need to make seperate lines for multiple HTML files
// you can link css files so long as they are nested inside the public folder
app.use(express.static(path.join(__dirname, "public")))

// Members API routes
app.use('/api/members', require('./routes/api/members'))

// Route is the '/whatever' but the method we use are app.get (post, pust, etc)

// This method is for not the best use case since you would have to make a path for each HTML file if you had different pages
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// ! this creates the whole template for you in an HTML file

// This means we want to look at the environment variables through a PORT
// the reason we use process.env.PORT is because the server will most likely not run it on the 5000
// It will have the PORT # in the environment variable 
// SO if it's NOT available we use || 5000 to run it on that PORT #
const PORT = process.env.PORT || (5000)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// -D in the terminal saves it a Developer dependency
// if you add this - "start": "node server", "dev": "nodemon server" in the script for the package.json and run npm run dev in the terminal, it will run the nodemon as another method
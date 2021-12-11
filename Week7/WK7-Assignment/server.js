const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = 9000

const actorRouter = require('./routes/ActorRouter')

app.use('/actors', actorRouter)

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(400).send({ errMsg: err.message })
})

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
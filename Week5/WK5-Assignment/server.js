const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 9000

const bountyHunterRouter = require('./routes/bounties')

app.use(express.json())
app.use(morgan('dev'))
app.use('/bounties-available', bountyHunterRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
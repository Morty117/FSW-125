const express = require('express')
const app = express()
const PORT = 3000

const bountyHunterRouter = require('./routes/bounties')

app.use(express.json())
app.use('/bounties-available', bountyHunterRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
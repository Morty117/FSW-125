const express = require('express')
const morgan = require('morgan')
const { use } = require('./routes/Todo')

const app = express()
const PORT = 3000

const todoRouter = require('./routes/Todo')

app.use(express.json())
app.use(morgan('dev'))

app.use('/todos', todoRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})
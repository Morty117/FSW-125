const express = require('express')
const morgan = require('morgan')
const inventoryRouter = require('./routes/InventoryRouter')
const app = express()

const PORT = 3000

app.use(express.json())
app.use(morgan('dev'))
app.use('/inventory', inventoryRouter)

app.listen(PORT, () => {
    console.log(`App start on port: ${PORT}`)
})
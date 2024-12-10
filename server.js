const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const ItemRoute = require('./route/itemsRoute')

const app = express()

const PORT =  8000

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api/items', ItemRoute)


app.listen(PORT, ()=>{
    console.log(`Server is listening on the port ${PORT}`)
})
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const cardRoutes = require('./Routes/cardRoutes')

const MONGODB_URL = process.env.MONGODB_URL
const FRONTEND_URL = process.env.FRONTEND_URL

app.use(express.json())
app.use(cors({
    origin : FRONTEND_URL
}))

app.use('/h', (req, res)=>{
    res.send("Hello")
})


app.use('/', cardRoutes)

mongoose.connect(`${MONGODB_URL}/PassItOn`).then(() => {
    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000")
    })
})
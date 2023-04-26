const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Task = require('./models/tasks')
const router = require('./routes/tasks')
const cors = require('cors')

const app = express()
const path = process.env.PORT || 8000

app.use(express.json())
app.use(cors())

app.use('/api/tasks', router)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        app.listen(path, () => {
            console.log(`listening on port ${path}`)
        })
    })
    .catch(err => console.log(err))
    



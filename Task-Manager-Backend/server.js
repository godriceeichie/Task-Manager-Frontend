const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const Task = require('./models/tasks')
const router = require('./routes/tasks')

const app = express()
const path = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI)
    .then(app.listen(path, () => {
        console.log(`listening on port ${path}`)
    }))
    .catch(err => console.log(err))
    
app.use(express.json())
app.use('/api/tasks', router)



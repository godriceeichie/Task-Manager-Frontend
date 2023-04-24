const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }

}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)
module.exports = Task
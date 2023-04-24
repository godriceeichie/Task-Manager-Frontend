const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    comments: [{
        body: String,
        date: Date
    }],
    assignee: [
        
    ]
})
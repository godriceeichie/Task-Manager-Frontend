const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
    street: String,
    city: String
})

const userSchema = new Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
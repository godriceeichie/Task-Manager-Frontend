const mongoose = require('mongoose')
const express = require('express')
const User = require('./models/test')
const app = express()

const dbURI = 'mongodb+srv://godriceeichie:Riceandstew2006%23@cluster0.bqf0mcl.mongodb.net/task-management?retryWrites=true&w=majority'
mongoose.connect(dbURI)

const run = async () => {
   try{
        const user = await User.create({
            name: 'Godrice',
            age: 20,
            email: 'FELIXEICHIE@gmail.com',
            hobbies: ['Watching Films', 'Playing table tennis'],
            address: {
                city: 'California',
                street: 'Elton Street'
            }
        })
        console.log(user)
   }
   catch(e){
    console.log(e.message)
   }

   
}

run()
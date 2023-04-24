// import mongoose from "mongoose";
const mongoose = require("mongoose");
const express = require("express");
const Task = require("./models/tasks");

const app = express();
// const dbURI = 'mongodb+srv://godriceeichie:Riceandstew2006%23@cluster0.bqf0mcl.mongodb.net/task-management?retryWrites=true&w=majority'
const dbURI =
  "mongodb+srv://godriceeichie:Riceandstew2006%23@cluster0.bqf0mcl.mongodb.net/task-management?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

app.get('/single-task', (req, res) => {
    Task.findById('6442ac65dd5ee48b7c43e164')
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            console.log(err)
        })
})

app.get("/add-task", (req, res) => {
  const tasks = new Task({
    name: "Wash plates",
  });
  tasks
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/all-tasks", (req, res) => {
  Task.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

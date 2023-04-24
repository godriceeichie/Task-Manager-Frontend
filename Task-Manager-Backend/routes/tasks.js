const express = require('express')
const {getTasks, getTask, createTask, deleteTask, updateTask} = require('../controllers/taskControllers')

const router = express.Router()

//get all the tasks
router.get('/', getTasks)

//get a single task
router.get('/:id', getTask)

//post a single task
router.post('/', createTask)

//delete a single task
router.delete('/:id', deleteTask)

//update a single task
router.patch('/:id', updateTask)

module.exports = router
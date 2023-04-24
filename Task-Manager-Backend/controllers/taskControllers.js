const Task = require('../models/tasks')
const mongoose = require('mongoose')

const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({ createdAt: -1 })

    res.status(200).json(tasks)
}

const getTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ error: 'No such task' })
    }

    const task = await Task.findById(id)
    if (!task) {
        return res.status(404).json({ err: 'No such workout' })
    }
    res.status(200).json(task)
}

const createTask = async (req, res) => {
    const { name, description } = req.body
    try {
        const task = await Task.create({ name, description })
        res.status(200).json(task)
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}

const deleteTask = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such task' })
    }

    const task = await Task.findOneAndDelete({ _id: id })

    if (!task) {
        return res.status(400).json({ error: 'No such task' })
    }
    res.status(200).json(task)
}

const updateTask = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such task' })
    }

    const task = await Task.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!task) {
        return res.status(400).json({ error: 'No such task' })
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}
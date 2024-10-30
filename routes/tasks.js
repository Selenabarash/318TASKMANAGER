const express = require('express');
const router = express.Router();

let tasks = [];

// GET all tasks
router.get('/', (req, res) => {
    res.render('index', { tasks });
});

// POST a new task
router.post('/', (req, res) => {
    const newTask = { id: tasks.length + 1, title: req.body.title, description: req.body.description, completed: false };
    tasks.push(newTask);
    res.redirect('/tasks');
});

// PATCH to update a task
router.patch('/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (task) {
        task.completed = req.body.completed === 'true';
        res.status(200).send(task);
    } else {
        res.status(404).send('Task not found');
    }
});

// DELETE a task
router.delete('/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.status(204).send();
});

module.exports = router;

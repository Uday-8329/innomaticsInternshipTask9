const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new to-do
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title) return res.status(400).json({ error: 'Title is required' });

        const todo = new Todo({ title, description });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Other CRUD routes (GET, PUT, DELETE)...

module.exports = router;
const express = require('express');
const tasks = require('../models/tasks')

function getAllTasks() {
    const router = express.Router();

    // GET / -> retourne la liste des tâches
    router.get('/', (req, res) => {
        res.json({ tasks });
    });

    return router;
}

module.exports = { getAllTasks };
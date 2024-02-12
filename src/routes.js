// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('./app/controller/taskController');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.put('/:id/status', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
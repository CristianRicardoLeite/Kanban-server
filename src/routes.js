const express = require('express');
const router = express.Router();
const taskController = require('./app/controller/taskController');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);
router.put('/:id', taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

router.get('/search', taskController.searchTasks)

module.exports = router;
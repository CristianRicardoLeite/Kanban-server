// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('./app/controller/taskController');

router.get('/', taskController.getAllTasks);
router.post('/', taskController.addTask);

module.exports = router;
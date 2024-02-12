// controllers/taskController.js
const Task = require('../model/taskModel');

const getAllTasks = (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) {
      res.status(500).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success", "data": tasks });
  });
};

const addTask = (req, res) => {
  Task.addTask(req.body, (err, task) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success", "data": task });
  });
};

module.exports = { getAllTasks, addTask };

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

const updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Task.updateTaskStatus(id, status, (err) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "success", "id": id, "status": status });
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.deleteTask(id, (err) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "deleted", "id": id });
  });
};

const searchTasks = (req, res) => {
  const { query } = req.query;
  Task.searchTasks(query, (err, tasks) => {
    if (err) {
      res.status(500).send({ message: "Erro ao buscar tarefas", error: err.message });
    } else {

      console.log(tasks)
      res.status(200).send({ message: "Tarefas encontradas", data: tasks });
    }
  })
};

module.exports = { getAllTasks, addTask, updateTaskStatus, deleteTask, searchTasks };

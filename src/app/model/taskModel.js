// models/taskModel.js
const db = require('../../database');

function getAllTasks(callback) {
  const sql = "SELECT * FROM tasks";
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
}

function addTask(task, callback) {
  const { name, status, dueDate } = task;
  const sql = 'INSERT INTO tasks (name, status, dueDate) VALUES (?,?,?)';
  db.run(sql, [name, status, dueDate], function (err) {
    callback(err, { id: this.lastID, ...task });
  });
}

function updateTaskStatus(id, status, callback) {
  const sql = 'UPDATE kanban_tasks SET status = ? WHERE id = ?';
  db.run(sql, [status, id], function (err) {
    callback(err);
  });
}

function deleteTask(id, callback) {
  const sql = 'DELETE FROM kanban_tasks WHERE id = ?';
  db.run(sql, id, function (err) {
    callback(err);
  });
}

module.exports = { getAllTasks, addTask, updateTaskStatus, deleteTask };

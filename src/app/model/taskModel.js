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

module.exports = { getAllTasks, addTask };

const db = require('../../database');

function getAllTasks(callback) {
  const sql = 'SELECT * FROM tasks ORDER BY status ASC, dueDate ASC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      callback(err, null);
      return;
    }
    rows.sort((a, b) => {
      if (a.status !== b.status) {
        return a.status - b.status;
      } else {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
    });

    callback(null, rows);
  });
}
function addTask(task, callback) {
  const { name, status, dueDate } = task;

  if (!task) {
    throw new Error('Objeto "task" não fornecido ou undefined.');
  }

  const sql = 'INSERT INTO tasks (name, status, dueDate) VALUES (?,?,?)';
  db.run(sql, [name, status, dueDate], function (err) {
    callback(err, { id: this.lastID, ...task });
  });
}

function updateTaskStatus(id, status, callback) {
  const sql = 'UPDATE tasks SET status = ? WHERE id = ?';
  db.run(sql, [status, id], function (err) {
    callback(err);
  });
}

function deleteTask(id, callback) {
  const sql = 'DELETE FROM tasks WHERE id = ?';
  db.run(sql, id, function (err) {
    callback(err);
  });
}

function searchTasks(query, callback) {
  const sql = "SELECT * FROM tasks WHERE name LIKE ?";
  const params = [`%${query}%`];

  db.all(sql, params, (err, rows) => {
    callback(err, rows);
  });

};


module.exports = { getAllTasks, addTask, updateTaskStatus, deleteTask, searchTasks };

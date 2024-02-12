const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './kanban.db';

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados SQLite', err);
    throw err;
  }
  console.log('Conectado ao banco de dados SQLite');

  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    status TEXT NOT NULL,
    dueDate TEXT
  )`, (err) => {
    if (err) {
      console.error('Erro ao criar a tabela tasks', err);
    } else {
      console.log('Tabela tasks criada ou já existente');
    }
  });
});

module.exports = db;

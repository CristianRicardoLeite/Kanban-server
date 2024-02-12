const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Use as rotas de tarefas
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Kanban backend is running...' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

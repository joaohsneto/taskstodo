const express = require('express');
const bodyParser = require('body-parser');
const statusCode = require('http-status-codes');
const controller = require('./controllers/tasksControllers');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser(app));

app.get('/', (req, res) => {
  res.status(statusCode.OK).send('TasksToDo!');
});

// Criar Tarefas
app.post('/create', controller.createTask);

//Pesquisar todas as tarefas
app.get('/task', controller.findAllTask);

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));

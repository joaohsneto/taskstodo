const service = require('../services/tasksServices');
const statusCode = require('http-status-codes');

// Controller de criação de tarefas
const createTask = async (req, res) => {
  const { task, status } =  req.body;
  const { id } = await service.createTask({ task, status });
  return res.status(statusCode.CREATED).json({ _id: id, task, status });
};

// Controller para pesquisar todas as tarefas
const findAllTask = async (req, res) => {
  const findAll = await service.findAllTask();
  return res.status(statusCode.OK).json(findAll);
};

// Controller para pesquisar tarefa por ID
const findTaskById = async (req, res) => {
  const { id } = req.params;
  const findById = await service.findTaskById(id);
  return res.status(statusCode.OK).json(findById);
};

// Controller para atualizar tarefa
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  await service.updateTask({ task, status }, id);
  res.status(statusCode.OK).json({ _id: id, task, status });
};

// Constroller para deletar tarefa
const deleteTask = async (req, res) => {
  const { id } = req.params;
  await service.deleteTask(id);
  return res.status(statusCode.NO_CONTENT).json();
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
  updateTask,
  deleteTask,
};

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

const findTaskById = async (req, res) => {
  const { id } = req.params;
  const findById = await service.findTaskById(id);
  return res.status(statusCode.OK).json(findById);
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
};

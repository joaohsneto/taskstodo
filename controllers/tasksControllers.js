const service = require('../services/tasksServices');
const statusCode = require('http-status-codes');

// Controller de criação de tarefas
const createTask = async (req, res) => {
  const { task, status } =  req.body;
  const { id } = await service.createTask({ task, status });
  return res.status(statusCode.CREATED).json({ _id: id, task, status });
};

module.exports = {
  createTask,
};

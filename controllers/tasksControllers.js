const service = require('../services/tasksServices');
const statusCode = require('http-status-codes');

const createTask = async (req, res) => {
  const { task, status } =  req.body;
  const create = await service.createTask({ task, status });
  return res.status(statusCode.CREATED).json(create);
};

module.exports = {
  createTask,
};

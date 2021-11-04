const model = require('../models/tasksModels');

// Service de criação de tarefas
const createTask = async ({task, status}) => {
  const create = await model.createTask({task, status});
  return create;
};

const findAllTask = async () => {
  const findAll = await model.findAllTask();
  return findAll;
};

module.exports = {
  createTask,
  findAllTask,
};

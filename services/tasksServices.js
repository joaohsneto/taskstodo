const model = require('../models/tasksModels');

// Service de criação de tarefas
const createTask = async ({task, status}) => {
  const create = await model.createTask({task, status});
  return create;
};

// Service para pesquisar todas as tarefas
const findAllTask = async () => {
  const findAll = await model.findAllTask();
  return findAll;
};

// Service para pesquisar tarefas por id
const findTaskById = async (id) => {
  const findById = await model.findTaskById(id);
  return findById;
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
};

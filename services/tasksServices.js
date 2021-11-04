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

// Service para atualizar tarefa
const updateTask = async ({ task, status }, id) => {
  await model.updateTask({ task, status }, id);
  return { id, task, status };
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
  updateTask,
};

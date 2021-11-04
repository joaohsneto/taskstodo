const { ObjectId } = require('mongodb');
const model = require('../models/tasksModels');
const validations = require('../middlewares/fieldsValidations');
const statusCode = require('http-status-codes');

// Service de criação de tarefas
const createTask = async ({task, status}) => {
  const validateFields = await validations.validateTask(task, status);
  const validateNotNumber = await validations.validateTaskNotNumber(task)
  if (!validateFields) {
    return { code: statusCode.UNPROCESSABLE_ENTITY, message: 'task and status is required' };
  }
  if (!validateNotNumber) {
    return { code: statusCode.BAD_REQUEST, message: 'task must have more than 5 characters and must be a string'};
  }
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
  if (!ObjectId.isValid(id)) {
    return { code: statusCode.BAD_REQUEST, message: 'wrong id' };
  }
  const findById = await model.findTaskById(id);
  if (!findById) {
    return { code: statusCode.NOT_FOUND, message: 'task not found' };
  }
  return findById;
};

// Service para atualizar tarefa
const updateTask = async ({ task, status }, id) => {
  await model.updateTask({ task, status }, id);
  return { id, task, status };
};

// Service para deletar tarefa
const deleteTask = async ({ id }) => {
  if (!ObjectId.isValid(id)) {
    return { code: statusCode.BAD_REQUEST, message: 'wrong id' };
  }
  const deletedTask = await model.deleteTask({ id });
  return deletedTask;
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
  updateTask,
  deleteTask
};

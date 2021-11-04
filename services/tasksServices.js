const model = require('../models/tasksModels');

const createTask = async ({task, status}) => {
  const create = await model.createTask({task, status});
  return create;
};

module.exports = {
  createTask,
};

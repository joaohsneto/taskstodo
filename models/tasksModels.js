const connect = require('./connections');

// Model de criação de tarefas
const createTask = async ({ task, status }) => {
  const db = await connect();
  const { insertedId: id } = await db.collection('tasks').insertOne({ task, status });
  return { id, task, status };
};

// Model para pesquisar todas as tarefas
const findAllTask = async () => {
  const db = await connect();
  const findAll = await db.collection('tasks').find().toArray();
  return findAll;
};

module.exports = {
  createTask,
  findAllTask,
};
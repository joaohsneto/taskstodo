const connect = require('./connections');

// Model de criação de tarefas
const createTask = async ({ task, status }) => {
  const db = await connect();
  const { insertedId: id } = await db.collection('tasks').insertOne({ task, status });
  return { id, task, status };
};

module.exports = {
  createTask,
};
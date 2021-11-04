const connect = require('./connections');

const createTask = async ({ task, status }) => {
  const db = await connect();
  const createdTask = await db.collection('tasks').insertOne({ task, status });
  return createdTask;
};

module.exports = {
  createTask,
};
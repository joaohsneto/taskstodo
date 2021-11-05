const { ObjectId } = require('mongodb');
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

// Model para pesquisar tarefas por ID
const findTaskById = async (id) => {
  const db = await connect();
  const findById = await db.collection('tasks').findOne(ObjectId(id));
  return findById;
};

// Model para atualizar tarefa
const updateTask = async ({ task, status }, id) => {
  const db = await connect();
  await db.collection('tasks').updateOne({ _id: ObjectId(id) }, { $set: { task, status } });
  return { id, task, status };
};

// Model para deletar tarefa
const deleteTask = async ({ id }) => {
  const db = await connect();
  const deletedTask = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deletedTask;
};

module.exports = {
  createTask,
  findAllTask,
  findTaskById,
  updateTask,
  deleteTask,
};
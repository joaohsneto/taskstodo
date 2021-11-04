const validateTask = (task, status) => {
  if (!task || !status) {
    return false;
  }
  return true;
};

const validateTaskNotNumber = (task) => {
  if (task.length < 6 || typeof task !== 'string') {
    return false;
  }
  return true;
};

module.exports = {
  validateTask,
  validateTaskNotNumber,
}
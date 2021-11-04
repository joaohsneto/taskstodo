const validateName = (name) => {
  if (!name || typeof name !== 'string') {
    return false;
  }
  return true;
};
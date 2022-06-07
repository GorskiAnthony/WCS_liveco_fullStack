const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const clearItem = (key) => {
  localStorage.removeItem(key);
};

export { setItem, getItem, clearItem };

const sum = (a, b) => {
  return a + b;
};

const person = (name, age) => {
  return {
    name,
    age,
  };
};

const toggle = (a) => {
  return !a;
};

module.exports = {
  sum,
  person,
  toggle,
};

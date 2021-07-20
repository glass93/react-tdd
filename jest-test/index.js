const sum = (a, b) => {
  return a + b;
};

const person = (name, age) => {
  return {
    name,
    age,
  };
};

module.exports = {
  sum,
  person,
};

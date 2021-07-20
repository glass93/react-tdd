const { sum, person } = require("./index");

describe("test index.js file", () => {
  it("sums 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("makes a person", () => {
    expect(person("Kim", 20)).toEqual({
      name: "Kim",
      age: 20,
    });
  });
});

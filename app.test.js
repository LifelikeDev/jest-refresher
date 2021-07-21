const functions = require("./app");

// writing tests
test("adds 30 and 8 to give 38", function () {
  expect(functions.add(30, 8)).toBe(38);
});

test("multiplies 5 by 8 to give 40", () => {
  expect(functions.multiply(5, 8)).toBe(40);
});

test("multiplies 6 by 2 to not equal 10", () => {
  expect(functions.multiply(6, 2)).not.toBe(10);
});

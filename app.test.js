const functions = require("./app");

// writing tests

// // toBe()
// test("adds 30 and 8 to give 38", function () {
//   expect(functions.add(30, 8)).toBe(38);
// });

// test("multiplies 5 by 8 to give 40", () => {
//   expect(functions.multiply(5, 8)).toBe(40);
// });

// test("multiplies 6 by 2 to not equal 10", () => {
//   expect(functions.multiply(6, 2)).not.toBe(10);
// });

// // toBeNull()
// test("returns null as output", function () {
//   expect(functions.nullify()).toBeNull();
// });

// // toBeUndefined()
// test("to be undefined", function () {
//   let numeral;

//   expect(numeral).toBeUndefined();
// });

// // toBeDefined()
// test("to be defined", function () {
//   let numeral = 24;

//   expect(numeral).toBeDefined();
// });

// toBeFalsy()
// test("should be falsy", function () {
//   expect(functions.nullify()).toBeFalsy();
// });

// // toBeTruthy()
// test("should be truthy", function () {
//   expect(functions.truthify()).toBeTruthy();
// });

// // toEqual() --- for objects
// test("should return Leah Anderson", function () {
//   expect(functions.defineUser()).toEqual({
//     firstName: "Leah",
//     secondName: "Anderson",
//   });
// });

// // toBeGreaterThan()
// test("to be greater than 5", function () {
//   const sum = 34;
//   expect(sum).toBeGreaterThan(5);
// });

// toBeLessThan()
// test("value to be less than 80 dollars", function () {
//   const withdrawal1 = 50;
//   const withdrawal2 = 18;
//   expect(withdrawal1 + withdrawal2).toBeLessThan(80);
// });

// // toBeLessThanOrEqual()
// test("value to be less than or equal to 80 dollars", function () {
//   const withdrawal1 = 50;
//   const withdrawal2 = 30;
//   expect(withdrawal1 + withdrawal2).toBeLessThanOrEqual(80);
// });

// // toMatch()
// test('there is a "stop" in "Christopher"', () => {
//   expect("Christopher").toMatch(/Stop/i);
// });

// Arrays
// // toContain()
test("The list of people should include 'Efua'", function () {
  expect(functions.randomPeople()).toContain("Efua");
});

// test("The list of people should not include 'Esiana'", function () {
//   expect(functions.randomPeople()).not.toContain("Esiana");
// });

// Asynchronous calls

// Promises
// test("user should have the name 'Leanne Graham'", function () {
//   expect.assertions(1);

//   return functions.fetchUsers().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// test("User data should be 8 or more", function () {
//   expect.assertions(1);

//   return functions.fetchUsers().then((data) => {
//     expect(data.length).toBeGreaterThan(8);
//   });
// });

// Async Await

// test("User data should not be more than 12", async function () {
//   expect.assertions(1);

//   const data = await functions.fetchUsers();
//   expect(data.length).toBeLessThanOrEqual(11);
// });

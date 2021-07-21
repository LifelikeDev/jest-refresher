const isAnagram = require("./isAnagram");

test("isAnagram function should be defined", () => {
  expect(isAnagram).toBeDefined();
});

test("isAnagram function should be defined", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("reed and deer should be anagrams of each other", () => {
  const result = isAnagram("reed", "deer");

  expect(result).toBe(true);
});

test("'Dormitory' is an anagram of 'dirty room'", function () {
  const res = isAnagram("Dormitory", "dirty room");

  expect(res).toBeTruthy();
});

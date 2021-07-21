// checking if a given string is an anagram or not

function isAnagram(str1, str2) {
  return refineStr(str1) === refineStr(str2);
}

function refineStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = isAnagram;

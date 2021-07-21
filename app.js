const axios = require("axios");

const functions = {
  add: function (a, b) {
    return a + b;
  },
  /////////
  multiply: (g, h) => g * h,
  /////////
  nullify: function () {
    return null;
  },
  ////////
  truthify: function () {
    return -1;
  },
  ////////
  defineUser: function () {
    const user = { firstName: "Leah" };
    user.secondName = "Anderson";
    return user;
  },
  //////
  randomPeople: function () {
    const people = ["Jane", "Tyler", "Kyle", "Ama", "Efua"];
    return people;
  },
  ///////
  fetchUsers: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .catch((err) => `error: ${err}`);
  },
};

module.exports = functions;

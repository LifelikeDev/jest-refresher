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
};

module.exports = functions;

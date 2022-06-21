const Mock = require("mockjs");
const router = require("express").Router();
const user = require("./user");

function mockInit() {
  user(router, Mock);

  return router;
}

module.exports = exports = mockInit;

const Mock = require("mockjs");
const router = require("express").Router();
const user = require("./user");
const project = require('./project')

function mockInit() {
  user(router, Mock);
  project(router, Mock);

  return router;
}

module.exports = exports = mockInit;

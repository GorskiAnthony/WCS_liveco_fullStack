const route = require("express").Router();

const UserController = require("../controllers/UserController");
route.get("/register", UserController.register);
route.get("/login", UserController.login);

module.exports = route;

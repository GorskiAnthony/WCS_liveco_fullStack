const route = require("express").Router();

const UserController = require("../controllers/UserController");
route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.post("/logout", UserController.logout);

module.exports = route;

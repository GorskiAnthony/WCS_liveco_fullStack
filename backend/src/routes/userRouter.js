const userRoute = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");
const fileMiddleware = require("../middleware/fileMiddleware");

const UserController = require("../controllers/UserController");

userRoute.put("/", authMiddleware, fileMiddleware, UserController.update);

module.exports = userRoute;

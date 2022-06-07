const userRoute = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

const FavoriteController = require("../controllers/FavoriteController");
const UserController = require("../controllers/UserController");

userRoute.get("/favorites", authMiddleware, FavoriteController.findFavorites);
userRoute.put("/", authMiddleware, UserController.update);

module.exports = userRoute;

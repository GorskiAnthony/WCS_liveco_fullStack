const favoriteRoute = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

const FavoriteController = require("../controllers/FavoriteController");

favoriteRoute.get(
  "/favorites",
  authMiddleware,
  FavoriteController.findFavorites
);

module.exports = favoriteRoute;

const FavoriteModel = require("../models/FavoriteModel");

class FavoriteController {
  static async findFavorites(req, res) {
    try {
      const favorites = await FavoriteModel.findById(req.user.id);
      res.status(200).json(favorites);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = FavoriteController;

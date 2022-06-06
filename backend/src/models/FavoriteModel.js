const connection = require("../services/connection");

class FavoriteModel {
  async findAll() {
    const result = await connection.promise().query(`SELECT * FROM favorites`);
    return result[0];
  }

  async findById(id) {
    const result = await connection
      .promise()
      .query(`SELECT * FROM favorites WHERE user_id = ?`, [id]);
    return result[0];
  }
}

module.exports = new FavoriteModel();

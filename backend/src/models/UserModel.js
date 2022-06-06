const connection = require("../services/connection");

class UserModel {
  async create(user) {
    const { email, password } = user;
    const result = await connection
      .promise()
      .query(`INSERT INTO users (email, password) VALUES (?,?)`, [
        email,
        password,
      ]);
    return result;
  }
}

module.exports = new UserModel();

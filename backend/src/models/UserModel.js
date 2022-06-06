const connection = require("../services/connection");

class UserModel {
  async getByEmail(email) {
    const result = await connection
      .promise()
      .query(`SELECT * FROM users WHERE email = ?`, [email]);
    return result[0][0];
  }

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

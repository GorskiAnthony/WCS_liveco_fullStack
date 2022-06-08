const connection = require("../services/connection");
const jwt = require("jsonwebtoken");

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

  async update(user, id) {
    const result = await connection
      .promise()
      .query(`UPDATE users SET ? WHERE id = ?`, [user, id]);
    return result;
  }

  async generateToken(user) {
    const { id, email } = user;
    const token = await jwt.sign({ id, email }, process.env.JWT_SECRET);
    return token;
  }
}

module.exports = new UserModel();

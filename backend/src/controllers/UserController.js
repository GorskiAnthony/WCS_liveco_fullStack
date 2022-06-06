const bcrypt = require("bcryptjs");
const registerSchema = require("../schema/RegisterSchema");
const loginSchema = require("../schema/LoginSchema");
const UserModel = require("../models/UserModel");

class UserController {
  static async register(req, res) {
    try {
      const { email, password, repeat_password } = req.body;
      const { error } = registerSchema.validate(
        { email, password, repeat_password },
        { abortEarly: false }
      );

      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        // if all done, i hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        const user = await UserModel.create({
          email,
          password: hashedPassword,
        });
        res.status(201).json(user);
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const { error } = loginSchema.validate(
        { email, password },
        { abortEarly: false }
      );
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        const user = await UserModel.getByEmail(email);
        if (user) {
          const isValid = await bcrypt.compareSync(password, user.password);
          if (isValid) {
            res.status(200).json({ id: user.id, email: user.email });
          } else {
            res.status(401).json({ error: "Invalid password" });
          }
        } else {
          res.status(401).json({ error: "Invalid email" });
        }
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;

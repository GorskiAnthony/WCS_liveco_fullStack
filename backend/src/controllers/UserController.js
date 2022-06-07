const bcrypt = require("bcryptjs");
const registerSchema = require("../services/schema/RegisterSchema");
const loginSchema = require("../services/schema/LoginSchema");
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
        const user = await UserModel.getByEmail(email);
        if (user) {
          res
            .status(409)
            .json({ validationErrors: [{ message: "Email already exists" }] });
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
            const token = await UserModel.generateToken(user);
            res
              .cookie("user_token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                sameSite: "strict",
              })
              .status(200)
              .json({
                id: user.id,
                email: user.email,
                avatar: user.avatar,
              });
          } else {
            res
              .status(401)
              .json({ validationErrors: [{ message: "Invalid password" }] });
          }
        } else {
          res
            .status(401)
            .json({ validationErrors: [{ message: "Invalid email" }] });
        }
      }
    } catch (err) {
      res.status(400).json({ validationErrors: [{ message: err.message }] });
    }
  }

  static async logout(req, res) {
    try {
      res
        .clearCookie("token")
        .status(200)
        .json({ message: "Logout successful" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      res.status(204).json({ message: "Update successful" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;

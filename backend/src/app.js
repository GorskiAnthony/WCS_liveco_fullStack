const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
// Routes
const authRouter = require("./routes/authRouter");
const favoriteRouter = require("./routes/favoriteRouter");

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", favoriteRouter);

module.exports = app;

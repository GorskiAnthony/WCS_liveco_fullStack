const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Routes
const authRouter = require("./routes/authRouter");
const favoriteRouter = require("./routes/favoriteRouter");

app.use(logger("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", favoriteRouter);

module.exports = app;

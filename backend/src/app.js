const express = require("express");
const app = express();
const logger = require("morgan");
const authRouter = require("./routes/authRouter");

app.use(logger("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);

module.exports = app;

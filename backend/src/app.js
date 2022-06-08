const express = require("express");
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// Routes
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");

app.use(cookieParser());
app.use(logger("dev"));
// folder uploads
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

module.exports = app;

require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // get the token in the cookies
  const token = req.cookies.user_token;
  if (token) {
    // verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ validationErrors: [{ message: "Invalid token" }] });
      }
      // if everything is good, save to request for use in other routes
      req.user = decoded;
      next();
    }); // end of jwt.verify
  } else {
    // if there is no token
    // return an error
    return res
      .status(401)
      .json({ validationErrors: [{ message: "No token provided" }] });
  }
};

module.exports = authMiddleware;

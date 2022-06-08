const formidable = require("formidable");

const fileMiddleware = (req, res, next) => {
  const form = new formidable.IncomingForm({
    uploadDir: "./uploads",
    keepExtensions: true,
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ validationErrors: [{ message: err.message }] });
    } else {
      req.body = fields;
      req.files = files;
      next();
    }
  });
};

module.exports = fileMiddleware;

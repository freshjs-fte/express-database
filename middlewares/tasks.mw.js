module.exports.validateTask = (req, res, next) => {
  const data = req.body;
  if (data.body === "") {
    next(new TypeError("Body should not be empty string"));
  }
  next();
};

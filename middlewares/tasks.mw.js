module.exports.validateTask = (req, res, next) => {
  const data = req.body;
  if (data.body === "") {
    next(new TypeError("Empty body"));
  }
  next();
};

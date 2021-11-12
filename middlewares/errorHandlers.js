module.exports.errorHandler = (err, req, res, next) => {
    next()
}

const sequelizeErrHandler = (err, req, res, next) => {
  console.log("error", err.message);

  if (err instanceof RangeError) {
    res.status(400).send({ error: "Проверь зарпос" });
    return;
  }
  res.status(400).send({ error: err.message });
};

const endErrHandler = (err, req, res, next) => {
  console.log("error", err.message);
  res.status(500).send({ error: "My bad. sry" });
};

const { BaseError, ValidationError } = require("sequelize");

/* Main error handler entrance */

module.exports.errorHandler = (err, req, res, next) => {
  const payload = {
    status: 500,
    err: "Server Error",
  };

  const verdict = clientErrHandler(err, payload);

  if (verdict) {
    res.status(payload.status).send(payload.err);
  }
  serverErrHandler(err, req, res, next);
};

/* Client error handlers */

const clientErrHandler = (err, payload) => {
  let result = false;
  if (err instanceof BaseError) {
    result = sequelizeErrHandler(err, payload);
  }
  // if ...
  return result;
};

/*  Sequelize error handlers */

const sequelizeErrHandler = (err, payload) => {

  if (err instanceof ValidationError) {
    payload.status = 400;
    payload.err = { error: "Проверь зарпос" };
    return true;
  }
  return false;
};

/* Server error handlers */

const serverErrHandler = (err, req, res, next) => {
  console.log("error", err.message);
  res.status(500).send({ error: err.message });
};

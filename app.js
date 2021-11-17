const express = require("express");
const router = require("./routes");
const { errorHandler } = require("./middlewares/errorHandlers");

const app = express();

app.use(express.json());

app.use('/static', express.static('public'));

/* Endpoints */
/* Path: / */

app.use("*", (req, res, next) => {
  // DEBUG
  // console.log(req.body, req.params, req.method, req.path);
  next();
});

app.use("/api", router);

/*  */
app.use(errorHandler);

module.exports = app;

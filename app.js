const express = require("express");
const router = require("./routes");
const { errorHandler } = require("./middlewares/errorHandlers");

const app = express();

app.use(express.json());

/* Endpoints */
/* Path: / */

app.get("/", (req, res, next) => {
  return res.send("Hello World!");
});

app.use("*", (req, res, next) => {
  // DEBUG
  // console.log(req.body);
  next();
});

app.use("/api", router);

app.use(errorHandler);

/*  */

module.exports = app;

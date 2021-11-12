const express = require("express");
const router = require("./routes");
const { errorHandler } = require("./middlewares/errorHandlers");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.use("*", (req, res, next) => {
  // DEBUG
  // console.log(req.body);
  next();
});

app.use("/api", router);

app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});

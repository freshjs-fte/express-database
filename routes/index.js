const express = require("express");
const router = express.Router();
const userRouter = require("./users.route");

router.get("/", (req, res) => {
  res.send("test");
});
router.use("/users", userRouter);

module.exports = router;

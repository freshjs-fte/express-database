const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  console.log("users");
  
  res.send({ data: ["user1", "user2"] });
});

module.exports = userRouter;

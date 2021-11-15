const userRouter = require("express").Router();

/* Path: /api/users */

userRouter.get("/", (req, res) => {
  console.log("users");
  
  res.send({ data: ["user1", "user2"] });
});

module.exports = userRouter;

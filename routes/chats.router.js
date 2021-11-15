const chatRouter = require("express").Router();

/* Path: /api/chats */
chatRouter
  .route("/")
  /*  */
  .get(function (req, res) {
    res.send("all chats");
  })
  /*  */
  .post(function (req, res) {
    res.send("created chat");
  });

chatRouter
  .route("/:id")
  /*  */
  .get(function (req, res) {
    res.send("chat with id=", req.params.id);
  })
  /*  */
  .patch(function (req, res) {
    res.send("update hat with id=", req.params.id);
  })
  /*  */
  .delete(function (req, res) {
    res.send("delete chat with id=", req.params.id);
  });

module.exports = chatRouter;

const chatRouter = require("express").Router();
const { getAllChats, createChat } = require("../controllers/chat.controller");

/* Path: /api/chats */
chatRouter
  .route("/")
  /*  */
  .get(getAllChats)
  /*  */
  .post(createChat);

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

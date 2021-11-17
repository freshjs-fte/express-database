const chatRouter = require("express").Router();
const { getAllChats, createChat } = require("../controllers/chat.controller");
const multer = require("multer");
const { STATIC_PATH } = require("../config/config.json");




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${STATIC_PATH}/images/chatLogos`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const chatLogosUpload = multer({ dest: storage });



/* Path: /api/chats */
chatRouter
  .route("/")
  /*  */
  .get(getAllChats)
  /*  */
  .post(chatLogosUpload.single("chat-logo"), createChat);

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

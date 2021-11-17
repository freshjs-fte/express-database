
module.exports.addUserChat = async (req, res, next) => {
    try {
      const {
        params: { userId, chatId },
      } = req;
  
      const foundChat = await Chat.findByPk(chatId);
  
      const foundUser = await User.findByPk(userId);
  
      const chatsOfUser = await foundChat.addUser(foundUser);
  
      console.log(chatsOfUser);
  
      res.status(200).send({ data: chatsOfUser });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports.getUserChats = async (req, res, next) => {
    try {
      const {
        params: { userId },
      } = req;
  
      const foundUser = await User.findByPk(userId);
  
      const chatsOfUser = await foundUser.getChats();
  
      res.status(200).send({ data: chatsOfUser });
    } catch (error) {
      next(error);
    }
  };
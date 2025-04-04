// Import the Message model
const Message = require("../models/message");

// Controller handles the business logic for messages
const messageController = {
  // Display all messages
  index: (req, res) => {
    const messages = Message.getAll().map((msg) => {
      if (!msg.added) {
        msg.added = new Date(); // Add date if missing
      }
      return msg;
    });
    res.render("index", { title: "Mini Message Board", messages });
  },

  // Display form to create new message
  newForm: (req, res) => {
    res.render("form", {
      title: "New Message",
    });
  },

  // Handle new message submission
  create: (req, res) => {
    const { messageText, messageUser } = req.body;
    Message.add(messageText, messageUser);
    res.redirect("/");
  },

  // Display a single message
  show: (req, res) => {
    const message = Message.getById(req.params.id);
    res.render("message", {
      title: "Message Details",
      message,
    });
  },
};

module.exports = messageController;

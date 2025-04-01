// Import the 'messages' array and 'addMessage' function from the 'message' model
const { messages, addMessage } = require("../models/message");

// Controller function to handle GET requests for the home page
exports.getMessages = (req, res) => {
  // Render the 'index' view template and pass the 'messages' array to it
  res.render("index", { messages });
};

// Controller function to handle GET requests for the "new message" form page
exports.newMessageForm = (req, res) => {
  // Render the 'form' view template
  res.render("form");
};

// Controller function to handle POST requests when a new message is submitted
exports.addNewMessage = (req, res) => {
  // Extract 'user' and 'text' fields from the request body
  const { user, text } = req.body;
  // Add the new message to the 'messages' array
  addMessage(user, text);
  // Redirect the client back to the home page after adding the message
  res.redirect("/");
};

// // Initialize an array to store message objects, starting with a default message
// const messages = [
//   {
//     user: "System", // Default user name
//     text: "It was a Tuesday morning in June when I discovered I could no longer speak.", // Default message text
//     date: new Date(), // Timestamp of when the message was added
//   },
// ];

// // Export an object to make the messages array and addMessage function accessible from other files
// module.exports = {
//   // The messages array holds all message objects
//   messages,

//   // Function to add a new message to the messages array
//   addMessage(user, text) {
//     messages.push({
//       user, // Name of the user adding the message
//       text, // Content of the message
//       date: new Date(), // Current date and time when the message is added
//     });
//   },
// };
// Message model - handles data storage and retrieval
class Message {
  constructor() {
    // In-memory storage (would be a database in real app)
    this.messages = [
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date(), // Make sure initial messages have dates
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date(), // Make sure initial messages have dates
      },
    ];
  }

  // Get all messages
  getAll() {
    return this.messages;
  }

  // Add a new message
  add(text, user) {
    this.messages.push({
      text,
      user,
      added: new Date(),
    });
  }

  // Get a single message by index
  getById(id) {
    return this.messages[id];
  }
}

// Export a single instance of the Message model
module.exports = new Message();

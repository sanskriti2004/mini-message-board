// Import required modules
const express = require("express");
const path = require("path");

// Create Express application
const app = express();

// Set up view engine (EJS) and views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const messagesRouter = require("./routes/messages");
app.use("/", messagesRouter); // Use messages router for all routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

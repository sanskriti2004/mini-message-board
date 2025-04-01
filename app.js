const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

// Set the view engine to EJS for rendering templates
app.set("view engine", "ejs");
// Define the directory where the template files are located
app.set("views", path.join(__dirname, "views"));

// Middleware to parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Use the index router for handling routes
app.use("/", indexRouter);

// Define the port number
const PORT = process.env.PORT || 3000;
// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

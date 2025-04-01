const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

router.get("/", messageController.getMessages);
router.get("/new", messageController.newMessageForm);
router.post("/new", messageController.addNewMessage);

module.exports = router;

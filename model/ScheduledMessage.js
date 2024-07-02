// app/models/ScheduledMessage.js

const mongoose = require("../utils/mongoUtil");

const ScheduledMessageSchema = new mongoose.Schema({
  message: String,
  scheduledTime: Date,
});

const ScheduledMessage = mongoose.model(
  "ScheduledMessage",
  ScheduledMessageSchema
);

module.exports = ScheduledMessage;

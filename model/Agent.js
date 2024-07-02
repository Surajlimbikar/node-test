// app/models/agent.js

const mongoose = require("../utils/mongoUtil");

const AgentSchema = new mongoose.Schema({
  agent: String,
  // Add other fields as needed
});

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;

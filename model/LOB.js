// app/models/Lob.js (example, similar for other models)

const mongoose = require("../utils/mongoUtil");

const LobSchema = new mongoose.Schema({
  category_name: String,
  // Add other fields as needed
});

const Lob = mongoose.model("Lob", LobSchema);

module.exports = Lob;

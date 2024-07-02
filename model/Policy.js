// app/models/Policy.js (example, similar for other models)

const mongoose = require("../utils/mongoUtil");

const PolicySchema = new mongoose.Schema({
  policy_number: String,
  policy_start_date: String,
  policy_end_date: String,
  collectionId: String,
  userId: String,
  // Add other fields as needed
});

const Policy = mongoose.model("Policy", PolicySchema);

module.exports = Policy;

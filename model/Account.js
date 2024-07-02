// app/models/Account.js

const mongoose = require("../utils/mongoUtil");

const AccountSchema = new mongoose.Schema({
  account_name: String,
  // Add other fields as needed
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;

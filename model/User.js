// app/models/User.js

const mongoose = require("../utils/mongoUtil");

const UserSchema = new mongoose.Schema({
  firstname: String,
  dob: String,
  address: String,
  phone: String,
  state: String,
  zip: String,
  email: String,
  gender: String,
  userType: String,

  // Add other fields as needed
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

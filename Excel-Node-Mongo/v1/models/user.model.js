const mongoose = require("mongoose");

// schema:-
const userSchema = new mongoose.Schema({
  agent: String,
  userId: Number,
  firstname: String,
  dob: String,
  address: String,
  phone: String,
  state: String,
  zip: String,
  email: String,
  gender: String,
  userType: String,
  account_name: String,
  category_name: String,
  company_name: String,
  policy_number: String,
  policy_start_date: String,
  policy_end_date: String,
});

// model:-
// mongoose.model(modelName,schema,CollectionName)
module.exports = mongoose.model("User", userSchema, "users"); //[module.exports(this is export type in commonjs)]

// agent: {
//     agent: String,
//   },
//   user: {
//     userId: Number,
//     firstname: String,
//     dob: String,
//     address: String,
//     phone: String,
//     state: String,
//     zip: String,
//     email: String,
//     gender: String,
//     userType: String,
//   },
//   userAccount: {
//     account_name: String,
//   },
//   lop: {
//     category_name: String,
//   },
//   carrier: {
//     company_name: String,
//   },
//   policy: {
//     policy_number: String,
//     policy_start_date: String,
//     policy_end_date: String,
//   },

//  app/models/Carrier.js

const mongoose = require("../utils/mongoUtil");

const CarrierSchema = new mongoose.Schema({
  company_name: String,
  // Add other fields as needed
});

const Carrier = mongoose.model("Carrier", CarrierSchema);

module.exports = Carrier;

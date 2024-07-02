// app/utils/mongoUtil.js

const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27017/insurance";
// const uri = "mongodb+srv://limbikarsuraj11:Z81QmKKMFIBeCYEG@cluster-new.npbcjns.mongodb.net/";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

module.exports = mongoose;

const mongoose = require("mongoose");

// mongodb compass database :-
// const url = "mongodb://127.0.0.1:27017/test";

// mongodb Atlas database :-
const url =
  "mongodb+srv://limbikarsuraj11:Z81QmKKMFIBeCYEG@cluster-new.npbcjns.mongodb.net/";

// creating a default connection to mongodb
mongoose.connect(url);

// accessing default connection
const conn = mongoose.connection;

conn.on("connection", () => {
  console.log("connected to db");
});
conn.on("disconnection", () => {
  console.log("disconnected to db");
});
conn.on("error", () => {
  console.log("could not to connected to db");
});

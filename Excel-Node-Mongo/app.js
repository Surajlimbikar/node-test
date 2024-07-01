const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
require("./v1/models/db");
require("dotenv").config();

const port = process.env.PORT || 8888;
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "uploads")));

// app.use(path,middlewear)
app.use("/", require("./v1/routes/user.route"));

// server start
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

// app/server.js

const express = require("express");
const bodyParser = require("body-parser");
const uploadController = require("./controller/uploadController");
const policyController = require("./controller/policycontroller");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post("/upload", uploadController.uploadFile);
app.get("/policy/:username", policyController.getPolicyByUsername);
app.get("/aggregated-policy", policyController.getAggregatedPolicy);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

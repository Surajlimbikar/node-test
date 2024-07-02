// app/routes.js

const express = require("express");
const uploadController = require("./controllers/uploadController");
const policyController = require("./controllers/policyController");

const router = express.Router();

router.post("/upload", uploadController.uploadFile);
router.get("/policy/:username", policyController.getPolicyByUsername);
router.get("/aggregated-policy", policyController.getAggregatedPolicy);

module.exports = router;

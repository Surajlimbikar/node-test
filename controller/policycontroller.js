// app/controllers/policyController.js

const Policy = require("../model/Policy");

const getPolicyByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const policies = await Policy.find({ username });
    res.json(policies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAggregatedPolicy = async (req, res) => {
  try {
    const aggregationPipeline = [
      { $group: { _id: "$username", totalPolicies: { $sum: 1 } } },
    ];

    const aggregatedPolicy = await Policy.aggregate(aggregationPipeline);
    res.json(aggregatedPolicy);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPolicyByUsername, getAggregatedPolicy };

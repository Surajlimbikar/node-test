// app/utils/fileProcessor.js

const XLSX = require("xlsx");
const mongoose = require("./mongoUtil");
const Agent = require("../model/Agent");
const User = require("../model/User");
const Account = require("../model/Account");
const LOB = require("../model/LOB");
const Carrier = require("../model/Carrier");
const Policy = require("../model/Policy");

const processFile = async (filePath) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Determine the appropriate model based on the sheet name
    let Model;
    switch (sheetName) {
      case "Agent":
        Model = Agent;
        break;
      case "User":
        Model = User;
        break;
      case "Account":
        Model = Account;
        break;
      case "LOB":
        Model = LOB;
        break;
      case "Carrier":
        Model = Carrier;
        break;
      case "Policy":
        Model = Policy;
        break;
      default:
        throw new Error(`Unsupported sheet name: ${sheetName}`);
    }

    await Model.insertMany(data);
    return `File processed and data saved to ${sheetName} collection`;
  } catch (err) {
    console.error("Error processing file:", err);
    throw err;
  }
};

process.on("message", async (filePath) => {
  try {
    const result = await processFile(filePath);
    process.send(result);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

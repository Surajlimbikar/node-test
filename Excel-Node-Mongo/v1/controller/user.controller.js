const UserModel = require("../models/user.model");
const csv = require("csvtojson");
const CsvParser = require("json2csv").Parser;

const importUser = async (req, res) => {
  try {
    var userData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (var x = 0; x < response.length; x++) {
          userData.push({
            agent: response[x].agent,
            userId: response[x].userId,
            firstname: response[x].firstname,
            dob: response[x].dob,
            address: response[x].address,
            phone: response[x].phone,
            state: response[x].state,
            zip: response[x].zip,
            gender: response[x].gender,
            userType: response[x].userType,
            account_name: response[x].account_name,
            category_name: response[x].category_name,
            company_name: response[x].company_name,
            policy_number: response[x].policy_number,
            policy_start_date: response[x].policy_start_date,
            policy_end_date: response[x].policy_end_date,
          });
        }
        await UserModel.insertMany(userData);
        console.log(userData);
      });

    res.send({ status: 200, success: true, msg: "running" });
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};
const exportUser = async (req, res) => {
  try {
    var users = [];
    var userData = await UserModel.find();

    userData.forEach((user) => {
      const {
        agent,
        userId,
        firstname,
        dob,
        address,
        phone,
        state,
        zip,
        email,
        gender,
        userType,
        account_name,
        category_name,
        company_name,
        policy_number,
        policy_start_date,
        policy_end_date,
      } = user;
      users.push({
        agent,
        userId,
        firstname,
        dob,
        address,
        phone,
        state,
        zip,
        email,
        gender,
        userType,
        account_name,
        category_name,
        company_name,
        policy_number,
        policy_start_date,
        policy_end_date,
      });

      const csvFields = [
        "agent",
        " userId",
        "firstname",
        "dob",
        "address",
        "phone",
        "state",
        "zip",
        "email",
        "gender",
        "userType",
        "account_name",
        "category_name",
        "company_name",
        "policy_number",
        "policy_start_date",
        "policy_end_date",
      ];
      const csvParser = new CsvParser({ csvFields });
      const csvData = csvParser.parse(users);

      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attatchment: filename=new.csv");
      res.status(200).end(csvData);
      console.log(csvData);
    });

    res.send({ status: 200, success: true, msg: "running" });
  } catch (error) {
    res.send({ status: 400, success: false, msg: error.message });
  }
};

module.exports = { importUser, exportUser };

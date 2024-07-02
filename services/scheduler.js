// app/services/scheduler.js

const schedule = require("node-schedule");
const mongoose = require("../utils/mongoUtil");
const ScheduledMessage = require("../models/ScheduledMessage");

const scheduleMessage = (message, day, time) => {
  const scheduledTime = new Date(`${day}T${time}`);

  const job = schedule.scheduleJob(scheduledTime, async () => {
    try {
      await ScheduledMessage.create({ message, scheduledTime });
      console.log("Message scheduled successfully");
    } catch (err) {
      console.error("Error scheduling message:", err);
    }
  });

  return job.nextInvocation();
};

module.exports = { scheduleMessage };

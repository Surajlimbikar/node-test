// app/services/cpuMonitor.js

const os = require("os");
const { exec } = require("child_process");

const checkCPUUsage = () => {
  const cpuUsage = (os.loadavg()[0] * 100) / os.cpus().length;

  if (cpuUsage > 70) {
    console.log(
      `CPU usage is over 70% (${cpuUsage.toFixed(2)}%). Restarting server...`
    );
    exec("pm2 restart server", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error restarting server: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error output: ${stderr}`);
        return;
      }
      console.log(`Server restarted successfully: ${stdout}`);
    });
  }
};

setInterval(checkCPUUsage, 60000); // Check every minute

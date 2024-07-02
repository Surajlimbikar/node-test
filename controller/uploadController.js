// // app/controllers/uploadController.js

// const multer = require("multer");
// const { Worker } = require("worker_threads");
// const fileProcessor = require("../utils/fileProcessor");

// // Multer setup to specify the upload destination
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     // Generate a unique name for the uploaded file
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// const uploadFile = async (req, res) => {
//   const filePath = req.file.path;

//   const worker = new Worker(fileProcessor, { workerData: filePath });

//   worker.on("message", async (result) => {
//     res.status(200).json({ message: "File uploaded successfully", result });
//   });

//   worker.on("error", (err) => {
//     console.error(err);
//     res.status(500).json({ error: "Error processing file" });
//   });
// };

// module.exports = { uploadFile };

// app/controllers/uploadController.js

const multer = require("multer");
const { Worker } = require("worker_threads");
const path = require("path");
const fileProcessor = path.join(__dirname, "../utils/fileProcessor.js");

// Multer setup to specify the upload destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the uploaded file
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Upload file handler
const uploadFile = async (req, res) => {
  try {
    // 'single' is used because we are uploading a single file. Change as needed.
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading
        console.error(err);
        return res.status(500).json({ error: "Error uploading file" });
      } else if (err) {
        // An unknown error occurred when uploading
        console.error(err);
        return res.status(500).json({ error: "Unknown error uploading file" });
      }

      // File uploaded successfully, now process it using a worker thread
      const filePath = req.file.path;

      const worker = new Worker(fileProcessor, { workerData: filePath });

      worker.on("message", (result) => {
        res.status(200).json({ message: "File uploaded successfully", result });
      });

      worker.on("error", (err) => {
        console.error(err);
        res.status(500).json({ error: "Error processing file" });
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { uploadFile };

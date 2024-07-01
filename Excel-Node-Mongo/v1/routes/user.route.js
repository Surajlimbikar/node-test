const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const { importUser, exportUser } = require("../controller/user.controller");

router.post("/importUser", upload.single("file"), importUser);
router.get("/exportUser", exportUser);

module.exports = router;

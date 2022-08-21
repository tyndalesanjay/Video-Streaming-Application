const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    callback(null, Date.now() + ext);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "video/mp4") {
      callback(null, true);
    } else {
      console.log(error);
      callback(null, false);
    }
  },
//   limits: {
//     fileSize: 52428.800,
//   },
});

module.exports = upload;

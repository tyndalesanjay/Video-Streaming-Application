const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const videoController = require("../controllers/video.controllers")

router
  .get("/", adminController.getAdmins)
  .get("/videosRequest", videoController.getVideos)
  .post("/createAdmin", adminController.createAdmin);

router
    .get("/:id", adminController.getAdminById)
    .post("/adminUpdate/:id", adminController.updateAdmin);
module.exports = router;

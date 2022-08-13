const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controllers');
const upload = require('../_helpers/upload');

router
    .get("/", videoController.getVideos)
    .post('/videoUploadRequest', upload.single('videoLink'), videoController.videoUpload)

router
    .get("/:id", videoController.getVideoId)

module.exports =  router;

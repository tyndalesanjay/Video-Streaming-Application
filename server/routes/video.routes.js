const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controllers');
const upload = require('../_helpers/upload');

router
    .get('/', videoController.getVideos)
    .post('/videoUploadRequest', videoController.videoUpload)
    .delete('/deleteDeclinedUpload', videoController.deleteAllDeclined)
    .get('/searchVideos/:key', videoController.SearchVideos)
    // .post('/videoUploadRequest', upload.single('videoLink'), videoController.videoUpload)
    
    router
    .get('/:id', videoController.getVideoId)
    .put('/updateVideo/:id', videoController.updateVideoById)
    .delete('/deleteVideo/:id', videoController.deleteVideoById)

module.exports =  router;

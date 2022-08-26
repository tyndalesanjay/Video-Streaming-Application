const express = require('express');
const router = express.Router();
const videoController = require('../controllers/video.controllers');
const upload = require('../_helpers/upload');

router
    .get('/', videoController.getVideosActive)
    .post('/videoUpload', videoController.videoUpload)
    .delete('/deleteDeclinedUpload', videoController.deleteAllDeclined)
    .get('/searchVideos/:key', videoController.SearchVideos)
    .get('/videos', videoController.getVideos)
    // .post('/videoUploadRequest', upload.single('videoLink'), videoController.videoUpload)
    
    router
    .get('/trailer/:id', videoController.getVideoId)
    .put('/updateVideo/:id', videoController.updateVideoById)
    .put('/reviews/:id', videoController.postReview)
    .delete('/deleteVideo/:id', videoController.deleteVideoById)

module.exports =  router;

const Videos = require("../models/video.model");

exports.getVideos = async (req, res, next) => {
  try {
    let videoRequest = await Videos.find({ $where: function() { return ( this.status === "Active" ) } });
    res.status(200).json({
      status: "Success",
      length: videoRequest.length,
      results: videoRequest,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
  next();
};

exports.getVideoId = async (req, res, next) => {
  try {
    let videoId = await Videos.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      results: videoId,
    });
  } catch (error) {
    res.status({
      status: "Fail",
      message: error,
    });
  }
  next();
};

exports.videoUpload = async (req, res, next) => {
  const videoInfo = {
    authorName: req.body.authorName,
    description: req.body.description,
    videoLink: req.file
  };
  if (videoInfo.videoLink === !req.file) {
    error.httpStatusCode = 400
    return next(error)
  } else {
    videoInfo.videoLink = "http://localhost:5000/" + req.file.path;
  }

  try {
    let video = await Videos.create(videoInfo);
    res.status(202).json({
      status: "Success",
      results: video,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  next();
};

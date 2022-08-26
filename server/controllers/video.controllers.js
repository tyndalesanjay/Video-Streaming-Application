const Videos = require("../models/video.model");


exports.getVideosActive = async (req, res, next) => {
  try {
    let videoRequest = await Videos.find({
      $where: function () {
        return this.status === "Active";
      },
    });
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

exports.getVideos = async (req, res, next) => {
  try {
    let videoRequest = await Videos.find();
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

exports.SearchVideos = async (req, res, next) => {
  try {
    let data = await Videos.find({
      $or: [{ videoName: { $regex: req.params.key, $options: "i" } }],
    });
    res.status(200).json({
      status: "Success",
      length: data.length,
      results: data,
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
  // *Test File Upload
  // videoLink: "http://localhost:5000/" + req.file.filename
  // if (videoInfo.videoLink === !req.file) {
  //   error.httpStatusCode = 400
  //   return next(error)
  // } else {
  //   console.log(videoInfo);
  //   videoInfo.videoLink = "http://localhost:5000/" + req.file.filename;
  // }

  try {
    let video = await Videos.create(req.body);
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

exports.postReview = async (req, res, next) => {
  try {
    let review = await Videos.findByIdAndUpdate(
      {_id: req.params.id},
      { $push: {reviews: req.body} }
    )
    res.status(202).json({
      status: "Success",
      results: review,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: next(error),
    });
  }
}

exports.updateVideoById = async (req, res, next) => {
  try {
    let video = await Videos.findByIdAndUpdate(req.params.id, req.body);
    res.status(202).json({
      status: "Success",
      results: video,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: next(error),
    });
  }
  next();
};

exports.deleteVideoById = async (req, res, next) => {
  try {
    let video = await Videos.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: "Success",
      results: video,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: next(error),
    });
  }
  next();
};

exports.deleteAllDeclined = async (req, res, next) => {
  var myquery = { status: "Declined" };
  try {
    let videoDelete = await Videos.deleteMany(myquery);
    res.status(200).json({
      status: "Success",
      length: videoDelete.length,
      results: videoDelete,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
    console.log(err.Message);
  }
};

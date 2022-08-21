const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model");
const Videos = require("../models/video.model");

// * Admin Informational Routes
exports.getAdmins = async (req, res, next) => {
  try {
    let getAdmins = await Admin.find();
    res.status(200).json({
      status: "Success",
      results: getAdmins.length,
      getAdmins,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
  next();
};

exports.getAdminById = async(req, res, next) => {
    try {
        let adminId = await Admin.findById(req.params.id);
        res.status(200).json({
            status:"Success",
            result: adminId
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error
        })
    }

}

exports.createAdmin = async (req, res, next) => {
  // const hash = async(password, saltRounds = 10) => {
  //     try {
  //         const salt = await bcrypt.genSalt(saltRounds);
  //         return await bcrypt.hash(password, salt);

  //     } catch (error) {
  //         console.log(error)
  //         return null
  //     }
  // };
  const adminInfo = {
    userName: req.body.userName,
    passWord: req.body.passWord,
  };

  try {
    let adminCreate = await Admin.create(adminInfo);
    res.status(200).json({
      status: "Success",
      results: adminCreate,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error,
    });
  }
  next();
};

exports.updateAdmin = async (req, res) => {
  const adminUpdate = {
    userName: req.body.userName,
    passWord: req.body.passWord,
  };

  try {
    let update = await Admin.updateById(req.params.id, adminUpdate);
    res.status(200).json({
      status: "Updated",
      results: update,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error,
    });
  }
};

exports.DeleteAdmin = async (req, res) => {
  try {
    let update = await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Updated",
      results: update,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error,
    });
  }
};
// * End of Admin Routes

const Message = require('../models/contact.model')

exports.getAll = async (req, res, next) => {
    try {
        const allMessages = await Message.find()
        
        res.status(200).json({
            status: "Success",
            length: allMessages.length,
            results: allMessages,
        })
    } catch (error) {
        res.status(502).json({
            status: "Fail",
            message: error
        })
    }
    next()
}


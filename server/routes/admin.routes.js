const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const videoController = require("../controllers/video.controllers");
const contactController = require("../controllers/contact.controllers")

//* Admin Controllers
  router
    .get('/', adminController.getAdmins)
    .get('/')
    .get('/videosRequest', videoController.getVideos)
    .get('/getMessages', contactController.getAll)
    .post('/createAdmin', adminController.createAdmin)
  
  router
    .get('/:id', adminController.getAdminById)
    .post('/:id/adminUpdate', adminController.updateAdmin)


router
  .get('/:id/getMessage', contactController.getById)
  .delete('/:id/deleteMessage', contactController.deleteMessage)

    
module.exports = router;

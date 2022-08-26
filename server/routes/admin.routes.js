const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const videoController = require("../controllers/video.controllers");
const contactController = require("../controllers/contact.controllers")

//* Admin Controllers
  router
    .get('/', adminController.getAdmins)
    .post('/createAdmin', adminController.createAdmin)

  
  router
    .get('/:id', adminController.getAdminById)
    .post('/adminUpdate/:id', adminController.updateAdmin)
    .delete('/deleteAdmin/:id', adminController.DeleteAdmin)

    
module.exports = router;

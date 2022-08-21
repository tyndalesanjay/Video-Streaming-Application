const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controllers')

router
    .get('/', contactController.getAll)
    .post('/sendMessage', contactController.createMessage)

router 
    .get('/get_message/:id', contactController.getById)
    .put('/update_message/:id', contactController.updateMessage)
    .delete('/delete_message/:id', contactController.deleteMessage)

module.exports = router
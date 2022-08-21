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
}

exports.getById = async (req, res, next) =>  {
    try {
        const messageId = await Message.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            results: messageId,
            length: messageId.length,
        })
    } catch (error) {
        res.status(502).json({
            status: "Fail",
            message: error
        })
    }
    next()
}

exports.createMessage = async (req, res, next) => {
    let message = {
        name: req.body.name,
        subject: req.body.subject,
        email: req.body.email,
        message: req.body.message
    }
    try {
        const createMessage = await Message.create(message);
        res.status(200).json({
            status: "Success",
            results: createMessage
        })
    } catch(error) {
        res.status(502).json({
            status: "Fail",
            message: error
        })
    }
}

exports.updateMessage = async (req, res, next) => {
    let messageUpdate = {
        name: req.body.name,
        subject: req.body.subject,
        email: req.body.email,
        message: req.body.message
    }
    try {
        const update = await Message.findByIdAndUpdate(req.params.id, messageUpdate)
        res.status(200).json({
            status: "Success",
            results: update
        })
    } catch (error) {
        res.status(502).json({
            status: "Fail",
            message: next(error)
        })
    }
}

exports.deleteMessage = async (req, res, next) => {
    try {
        const messageDelete = await Message.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "Success",
            results: messageDelete
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}
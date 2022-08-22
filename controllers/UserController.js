const User = require("../models/User")
const bcrypt = require('bcryptjs')

const findAll = async (req, res, next) => {
    try {
        const data = await User.find()
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const findByID = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id)
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const store = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await newUser.save()
        res.status(201).json({ success: true, data: newUser })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const update = await User.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                }
            },
            { new: true }
        )
        res.status(201).json({ success: true, data: update })
    } catch (err) {
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: true, data: {} })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    findAll,
    findByID,
    store,
    update,
    destroy
}
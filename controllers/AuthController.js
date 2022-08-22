const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { createError } = require("../utils/error")
const dotenv = require('dotenv').config()

const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.json({ success: true, data: newUser })
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username }).exec();
        console.log(user)
        if (!user) return next(createError(404, "User not found!"))
        const comparePass = await bcrypt.compare(req.body.password, user.password)
        if (!comparePass) return next(createError(400, "Wrong password or username!"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWTSCRET)

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ success: true, data: user })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    login
}
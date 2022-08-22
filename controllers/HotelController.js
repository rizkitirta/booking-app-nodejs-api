const Hotel = require("../models/Hotel")

const findAll = async (req, res, next) => {
    try {
        const data = await Hotel.find()
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const findByID = async (req, res, next) => {
    try {
        const data = await Hotel.findById(req.params.id)
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const store = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const update = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(201).json({ success: true, data: update })
    } catch (err) {
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
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
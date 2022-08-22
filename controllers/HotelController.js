const Hotel = require("../models/Hotel")

const findAll = async (req, res) => {
    try {
        const data = await Hotel.find()
        res.status(201).json({ success: true, data })
    } catch (err) {
        res.status(500).json(err)
    }
}

const findByID = async (req, res, next) => {
    try {
        const data = await Hotel.findById(req.params.id)
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
        // res.status(500).json(err)
    }
}

const store = async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (err) {
        res.status(500).json(err)
    }
}

const update = async (req, res) => {
    try {
        const update = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(201).json({ success: true, data: update })
    } catch (err) {
        res.status(500).json(err)
    }
}

const destroy = async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: true, data: {} })
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    findAll,
    findByID,
    store,
    update,
    destroy
}
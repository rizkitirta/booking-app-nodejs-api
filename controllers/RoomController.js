const Hotel = require("../models/Hotel")
const Room = require("../models/Room")

const findAll = async (req, res, next) => {
    try {
        const data = await Room.find()
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const findByID = async (req, res, next) => {
    try {
        const data = await Room.findById(req.params.id)
        res.status(201).json({ success: true, data })
    } catch (err) {
        next(err)
    }
}

const store = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)

    try {
        const saveRoom = await newRoom.save()

        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: saveRoom._id }
        })
        res.status(200).json({ success: true, data: saveRoom })
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const update = await Room.findByIdAndUpdate(req.params.id,
            {
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
        await Room.findByIdAndDelete(req.params.id)
        await Hotel.findByIdAndUpdate(req.params.hotelId, {
            $pull: { rooms: req.params.id }
        })
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
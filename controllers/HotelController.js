const Hotel = require("../models/Hotel")

const findAll = async (req, res) => {
    res.send('hotel')
}

const findByID = async (req, res) => {

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

}

const destroy = async (req, res) => {

}

module.exports = {
    findAll,
    findByID,
    store,
    update,
    destroy
}
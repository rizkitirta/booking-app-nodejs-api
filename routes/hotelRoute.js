const express = require('express');
const Hotel = require('../model/Hotel');
const router = express.Router()
router.get('/', (req, res) => {
    res.send('hotel')
})
router.post('/', async (req, res) => {
    console.log(req.body)
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router
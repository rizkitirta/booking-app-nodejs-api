const express = require('express');
const HotelController = require('../controllers/HotelController')
const router = express.Router()

router.get('/',HotelController.findAll)
router.get('/',HotelController.findByID)
router.post('/',HotelController.store)
router.put('/',HotelController.update)
router.delete('/',HotelController.destroy)

module.exports = router
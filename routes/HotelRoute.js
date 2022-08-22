const express = require('express');
const HotelController = require('../controllers/HotelController')
const router = express.Router()

router.get('/',HotelController.findAll)
router.get('/:id',HotelController.findByID)
router.post('/',HotelController.store)
router.put('/:id',HotelController.update)
router.delete('/:id',HotelController.destroy)

module.exports = router
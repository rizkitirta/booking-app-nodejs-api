const express = require('express');
const RoomController = require('../controllers/RoomController')
const router = express.Router()

router.get('/',RoomController.findAll)
router.get('/:id',RoomController.findByID)
router.post('/:hotelId',RoomController.store)
router.put('/:id',RoomController.update)
router.delete('/:id/hotelId/:hotelId/',RoomController.destroy)

module.exports = router
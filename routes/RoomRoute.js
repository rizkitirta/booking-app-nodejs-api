const express = require('express');
const RoomController = require('../controllers/RoomController')
const router = express.Router()

router.get('/',RoomController.findAll)
router.get('/',RoomController.findByID)
router.post('/',RoomController.store)
router.put('/',RoomController.update)
router.delete('/',RoomController.destroy)

module.exports = router
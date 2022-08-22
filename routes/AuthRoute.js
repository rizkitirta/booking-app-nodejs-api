const express = require('express');
const AuthController = require('../controllers/AuthController')
const router = express.Router()

router.get('/',AuthController.findAll)
router.get('/',AuthController.findByID)
router.post('/',AuthController.store)
router.put('/',AuthController.update)
router.delete('/',AuthController.destroy)

module.exports = router
const express = require('express');
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/',UserController.findAll)
router.get('/',UserController.findByID)
router.post('/',UserController.store)
router.put('/',UserController.update)
router.delete('/',UserController.destroy)

module.exports = router
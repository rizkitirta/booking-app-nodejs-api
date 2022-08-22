const express = require('express');
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/', UserController.findAll)
router.get('/:id', UserController.findByID)
router.post('/', UserController.store)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.destroy)

module.exports = router
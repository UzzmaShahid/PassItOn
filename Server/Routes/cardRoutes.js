const express = require('express')
const router = express.Router()
const cardController = require('../Controller/cardController')

router.post('/', cardController.PostCard)
router.get('/card/:id', cardController.getCardById)

module.exports = router
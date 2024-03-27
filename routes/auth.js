const express = require('express')
const router = express.Router()

const { login, register } = require('../controllers/auth');

router.post('/register', register) //one way of doing this
router.post('/login', login)

module.exports = router
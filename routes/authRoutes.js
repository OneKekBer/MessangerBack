// src/routes/authRoutes.js
const express = require('express')
const { LogIn, Register } = require('../controllers/AuthController')

const router = express.Router()

router.get('/login', LogIn)
router.post('/register', Register)


module.exports = router

const express = require('express');
const router = express.Router();

const {login,dashboard} = require('../controller/login')

const authenticateUserMiddleware = require('../middlewares/auth')

router.route('/login').post(login)
router.route('/dashboard').get(authenticateUserMiddleware, dashboard)

module.exports = router
const express = require('express');
const router = express.Router();

const {login} = require('../controller/login')


router.route('/login').get(login)


module.exports = router
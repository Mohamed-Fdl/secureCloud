const express = require('express')

const bcrypt = require('bcrypt')

const router = express.Router()

const auth = require('../middlewares/auth')

const emailVerified = require('../middlewares/emailVerified')

const User = require('../models/User')

const { sign } = require('../utils/helpers')


router.get('/:token', [auth, emailVerified], async(req, res) => {
    console.log('go ressource')
    res.setHeader("Cache-Control", "no-cache");
    res.redirect(301, process.env.SECURE_CLOUD_LOCATION)
})


module.exports = router
const express = require('express')
const router = express.Router()

const userRequestValidator = require('../middlewares/userRequestValidator')

const User = require('../models/User')


router.post('/register', userRequestValidator, async(req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })

        if (userExist) {
            return res.status(400).json({
                error: true,
                message: 'User with this email already exist in Database',
                data: null
            })
        }

        const user = await User.create(req.body)

        return res.json({
            error: false,
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: 'An error occured.Please retry',
            data: user
        })
    }
})


module.exports = router
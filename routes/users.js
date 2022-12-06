const express = require('express')

const bcrypt = require('bcrypt')

const router = express.Router()

const userRequestValidator = require('../middlewares/userRequestValidator')

const User = require('../models/User')

const { sign } = require('../utils/helpers')


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
        return res.status(500).json({
            error: true,
            message: 'An error occured.Please retry',
            data: error
        })
    }
})

router.post('/login', userRequestValidator, async(req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })

        if (userExist) {

            const validCredentials = await bcrypt.compare(req.body.password, userExist.password);

            if (validCredentials) {

                let message = userExist.emailVerified ? 'User authenticated & email validated' : 'User authenticated .But email not validated'

                let token = sign({ email: userExist.email, verified: userExist.emailVerified })

                return res.status(200).json({
                    error: false,
                    message,
                    data: { user: userExist, token }
                })
            }

            return res.status(403).json({
                error: true,
                message: 'Credentials does not match',
                data: null
            })

        } else {
            return res.status(400).json({
                error: true,
                message: 'Credentials does not match',
                data: null
            })
        }


    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'An error occured.Please retry',
            data: error
        })
    }
})


module.exports = router
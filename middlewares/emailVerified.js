const jwt = require('jsonwebtoken')

function emailVerified(req, res, next) {
    if (!req.user.data.verified) {
        return res.status(401).send('Not authorized')
    }
    next()
}

module.exports = emailVerified
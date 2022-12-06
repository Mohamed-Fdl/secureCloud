const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.params.token

    if (!token) return res.status(401).send('Not authorized')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (ex) {
        res.status(400).send('Invalid Token')
    }
}

module.exports = auth
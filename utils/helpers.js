const jwt = require('jsonwebtoken');

module.exports.sign = function(data) {
    return jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: 60 });
}
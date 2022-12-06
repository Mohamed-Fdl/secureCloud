const jwt = require('jsonwebtoken');

module.exports.sign = function(data) {
    return jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: 60 });
}

module.exports.getRessourceLink = function(token) {
    return process.env.APP_URL + 'api/getRessource/' + token;
}
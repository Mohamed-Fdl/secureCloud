const jwt = require('jsonwebtoken');

module.exports.sign = function(data) {
    return jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: 60 });
}

module.exports.getRessourceLink = function(token) {
    return process.env.MOBILE_ACCESS_APP_URL + 'api/getRessource/' + token;
}

module.exports.getEmailVerificationLink = function(verificationToken) {
    return process.env.FRONT_APP_URL + 'verifyEmail.html?verifToken=' + verificationToken;
}

module.exports.sanitizeMongoDbReturn = function(mongoReturn) {
    return JSON.parse(JSON.stringify(mongoReturn))
}
const Joi = require('joi');

module.exports = function(req, res, next) {

    const bodySchema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    const value = bodySchema.validate(req.body)

    if (value.error) {
        return res.status(400).json({
            error: true,
            message: value.error.details[0].message,
            data: null
        })
    }

    next()
}
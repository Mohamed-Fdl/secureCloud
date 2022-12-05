const mongoose = require('mongoose');

const { v4: uuidv4 } = require('uuid');

const bcrypt = require('bcrypt');


const UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    emailValidationToken: { type: String, required: false },
});

UserSchema.pre('save', async function(next) {
    this.emailValidationToken = uuidv4()

    this.password = await bcrypt.hash(this.password, parseInt(process.env.BCRYPT_SALT_ROUND))

    next();
})

module.exports = mongoose.model('User', UserSchema);
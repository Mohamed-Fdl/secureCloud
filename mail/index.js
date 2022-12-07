const nodemailer = require('nodemailer')
require('dotenv').config()
const validateEmail = require('./validateEmail')


function Mailer(message, to) {

    var transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.MAIL_USER,
        to,
        subject: message.subject,
        html: message.html,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

//Mailer(validateEmail('www.google.com'), 'mohmedaboufadhel@gmail.com')

module.exports = Mailer
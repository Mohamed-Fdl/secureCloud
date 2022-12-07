let validateEmail = (link) => {
    return {
        subject: 'Validate your email',
        html: `<p>Please click on this <a href="${link}">Link</a> to validate your email.</p>`
    }
}


module.exports = validateEmail
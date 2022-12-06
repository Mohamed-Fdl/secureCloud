var QRCode = require('qrcode')

QRCode.toFile('file.png', [{ data: 'I am a pony!', mode: 'byte' }], { type: 'png' }, function(err, url) {
    console.log(url)
})
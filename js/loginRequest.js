/*let form = document.getElementById('form_pay_stripe')
let pay = document.getElementById('pay')
let message = document.getElementById('message-after-pay')
let btnPayModal = document.getElementById('btn-pay-modal')
let closePayModal = document.getElementById('close-pay-modal')
let headerModal = document.getElementById('exampleModalLabel')*/




(function($) {
    "use strict";

    const API_URL = 'http://localhost:3000'

    let successAlert = $('.alert-success')
    let dangerAlert = $('.alert-danger')
    let imgDissaper = $('#img-disaapear')

    $("#form-register").submit(function(event) {

        event.preventDefault();

        let email = $('#email-form-register').val()

        let password = $('#password-form-register').val()




        axios.post(API_URL + '/api/user/login', { email, password })
            .then(function(response) {
                if (!response.data.error) {
                    dangerAlert.css('display', 'none')
                    successAlert.css("display", "block")
                    successAlert.html(`${response.data.message}.`)

                    imgDissaper.css('display', 'none')

                    QRCode.toCanvas(document.getElementById('canvas'), response.data.data, function(error) {
                        if (error) console.error(error)
                        console.log('success!');
                    })

                } else {
                    successAlert.css('display', 'none')
                    dangerAlert.css("display", "block")
                    $('#canvas').css('display', 'none')
                    dangerAlert.html(`${response.data.message}. Let's retry`)
                }
            })
            .catch(function(error) {
                successAlert.css('display', 'none')
                dangerAlert.css("display", "block")
                $('#canvas').css('display', 'none')
                dangerAlert.html(`${error.response.data.message}. Let's retry`)
            });
    });



})(jQuery);
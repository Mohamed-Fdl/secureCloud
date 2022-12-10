(function($) {
    "use strict";

    const API_URL = 'http://localhost:3000'

    let mainMessage = $('.h1-info-text')
    let loader = $('.loader')
    let loginButton = $('#btn-after-validation')




    document.addEventListener('DOMContentLoaded', async() => {

        let searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('verifToken')) {
            const verifToken = searchParams.get('verifToken');
            axios.put(API_URL + '/api/user/verifyEmail/' + verifToken, )
                .then(function(response) {
                    if (!response.data.error) {
                        loader.css('display', 'none')
                        mainMessage.html(`${response.data.message}.`)
                        loginButton.css('display', 'block')
                    } else {
                        mainMessage.html(`${response.data.message}. Let's retry`)
                    }
                })
                .catch(function(error) {
                    mainMessage.html(`${error.response.data.message}. Let's retry`)
                });
        } else {
            window.location = '/'
        }
    });


})(jQuery);
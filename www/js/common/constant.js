angular.module('WebWedApp.constant', [])

    .constant('ENDPOINT_LIST', (function() {
    /*
        var web_server = 'http://www.riveloper.com';
        var api_root = '/test/api_example.php';
    */
        var web_server = 'http://localhost:8100';
        var api_root = '/test/api_example.php';

        return {
            DOMAIN: web_server,
            LOGIN_HOST_API: web_server + api_root + '?cmd=login',
            LOGIN_GUEST_API: web_server + api_root + '?cmd=login',
            SIGNUP_PAGE: web_server + '/sign_up.php',
            CHAT_PAGE: 'http://www.honeyfund.com/GiveAGift',
            GIFT_PAGE: 'http://www.honeyfund.com/GiveAGift'
        }
    })())
;

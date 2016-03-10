angular.module('WebWedApp')

    .factory('AuthService',
        ['$http', '$q', '$localStorage', 'ENDPOINT_LIST',
            function($http, $q, $localStorage, ENDPOINT_LIST) {

                var service = {};

                service.loginMode = '';

                // Reset storage
                service.reset = function() {
                    service.loginMode = '';
                    $localStorage['token'] = '';
                }

                // Login - Wedding party
                service.loginHost = function(email, password) {

                    var deferred = $q.defer();
                    var apiURL = ENDPOINT_LIST.LOGIN_HOST_API;
                    var postData = 'type=wedding_party' + '&' + 'email=' + encodeURIComponent(email) + '&' + 'password=' + encodeURIComponent(password);

                    var config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json'
                        }
                    }

                    $http.post(apiURL, postData, config)
                        .success(function(response) {
                            console.log('token: ' + response['data']['token']);

                            // Save token
                            $localStorage['token'] = response['data']['token'];

                            // Save login mode
                            service.loginMode = 'host';

                            deferred.resolve(response);
                        })
                        .error(function(error) {
                            console.log(JSON.stringify(error));

                            deferred.reject(error);
                        });

                    return deferred.promise;
                }

                // Login - Invited guest
                service.loginGuest = function(email, weddingcode) {

                    var deferred = $q.defer();
                    var apiURL = ENDPOINT_LIST.LOGIN_GUEST_API;
                    var postData = 'type=guest' + '&' + 'email=' + encodeURIComponent(email) + '&' + 'weddingcode=' + encodeURIComponent(weddingcode);

                    var config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json'
                        }
                    }

                    $http.post(apiURL, postData, config)
                        .success(function(response) {
                            console.log('token: ' + response['data']['token']);

                            // Save token
                            $localStorage['token'] = response['data']['token'];

                            // Save login mode
                            service.loginMode = 'guest';

                            deferred.resolve(response);
                        })
                        .error(function(error) {
                            console.log(JSON.stringify(error));

                            deferred.reject(error);
                        });

                    return deferred.promise;
                }

                service.getLoginMode = function() {
                    return service.loginMode;
                }

                // Logout
                service.logout = function() {
                    service.reset();
                }

                return service;
            } // end of factory function
        ]
    );
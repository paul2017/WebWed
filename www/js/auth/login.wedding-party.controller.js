angular.module('WebWedApp')

    .controller('LoginWeddingPartyCtrl',
        ['$scope', '$state', '$ionicHistory', '$cordovaInAppBrowser', 'ENDPOINT_LIST', 'AuthService',
            function($scope, $state, $ionicHistory, $cordovaInAppBrowser, ENDPOINT_LIST, AuthService) {

                // Clear navigation history
                $ionicHistory.clearHistory();

                $scope.login = {
                    email: 'test@test.com',
                    password: 'test'
                };

                $scope.doLogin = function() {

                    AuthService.loginHost($scope.login.email, $scope.login.password).then(
                        function(response) {
                            $state.go('app.home-host');
                        },
                        function(error) {

                        }
                    );
                }

                $scope.goNeedAccount = function() {

                    var options = {
                        location: 'yes',
                        clearcache: 'yes',
                        toolbar: 'yes'
                    };

                    $cordovaInAppBrowser.open(ENDPOINT_LIST.SIGNUP_PAGE, '_blank', options).then(
                        function(event) {
                            // success
                        }
                    ).catch(
                        function(event) {
                            // error
                        }
                    );
                }

            } // end of controller function
        ]
    );
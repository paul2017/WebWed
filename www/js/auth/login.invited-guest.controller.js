angular.module('WebWedApp')

    .controller('LoginInvitedGuestCtrl',
        ['$scope', '$state', '$ionicHistory', 'ENDPOINT_LIST', 'AuthService',
            function($scope, $state, $ionicHistory, ENDPOINT_LIST, AuthService) {

                // Clear navigation history
                $ionicHistory.clearHistory();

                $scope.login = {
                    email: 'test@test.com',
                    weddingcode: 'weddingcode',
                    pincode: '000000'
                };

                $scope.doLogin = function() {

                    AuthService.loginGuest($scope.login.email, $scope.login.weddingcode).then(
                        function(response) {
                            $state.go('app.home-guest');
                        },
                        function(error) {

                        }
                    );
                }

                $scope.resendMyCode = function() {

                }

            } // end of controller function
        ]
    );
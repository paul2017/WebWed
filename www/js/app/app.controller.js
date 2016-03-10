angular.module('WebWedApp')

    .controller('AppCtrl',
        ['$scope', '$state', '$rootScope', '$ionicHistory', 'AuthService',
            function($scope, $state, $rootScope, $ionicHistory, AuthService) {

                $scope.loginMode = AuthService.getLoginMode();

                $scope.goLogout = function() {

                    // Clear logged infomation
                    AuthService.logout();

                    // Clear history
                    $ionicHistory.clearHistory();

                    $state.go('login-startup');
                }

            } // end of controller function
        ]
    );
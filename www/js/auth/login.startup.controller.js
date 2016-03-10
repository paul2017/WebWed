angular.module('WebWedApp')

    .controller('LoginStartupCtrl',
        ['$scope', '$state', '$ionicPopup', '$ionicHistory',
            function($scope, $state, $ionicPopup, $ionicHistory) {

                // Clear navigation history
                $ionicHistory.clearHistory();

                $scope.goWeddingPartyLogin = function() {
                    $state.go('login-wedding-party');
                }

                $scope.goInvitedGuest = function() {
                    $state.go('login-invited-guest');
                }


                $scope.showAlert = function() {
                    $scope.alertPopup = $ionicPopup.alert({
                        template: '' +
                            '<button class="button button-small button-icon icon ion-ios-close-empty" ng-click="popupOK()"></button>' +
                            '<h1>Hmm</h1>' +
                            '<p>The password did not match the email address. Try again or reset password</p>' +
                            '<button class="button button-full button-positive" ng-click="popupOK()">OK</button>',
                        cssClass: 'customPopup',
                        scope: this

                    });

                    $scope.alertPopup.then(function(res) {
                        console.log('alertPopup');
                    });

                    $scope.popupOK = function() {
                        console.log('ok');
                        $scope.alertPopup.close();
                    }


                }
            } // end of controller function
        ]
    );
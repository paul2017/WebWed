angular.module('WebWedApp')

    .controller('PrivacyPolicyCtrl',
        ['$scope', '$state', '$stateParams',
            function($scope, $state, $stateParams) {

                $scope.$on('$ionicView.beforeEnter', function() {
                    $scope.navButton = $stateParams.navButton;
                    console.log('PrivacyPolicyCtrl $scope.navButton:' + $scope.navButton);
                });

            } // end of controller function
        ]
    );
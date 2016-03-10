angular.module('WebWedApp')

    .controller('TermsOfServiceCtrl',
        ['$scope', '$state', '$stateParams',
            function($scope, $state, $stateParams) {

                $scope.$on('$ionicView.beforeEnter', function() {
                    $scope.navButton = $stateParams.navButton;
                    console.log('TermsOfServiceCtrl $scope.navButton:' + $scope.navButton);
                });

            } // end of controller function
        ]
    );
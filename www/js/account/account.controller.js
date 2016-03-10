angular.module('WebWedApp')

    .controller('AccountCtrl',
        ['$scope', '$state', '$ionicHistory',
            function($scope, $state, $ionicHistory) {

                $scope.setting = {
                    agree: false
                }

            } // end of controller function
        ]
    );
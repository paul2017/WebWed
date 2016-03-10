angular.module('WebWedApp')

    .controller('ContactCtrl',
        ['$scope', '$state', '$ionicHistory',
            function($scope, $state, $ionicHistory) {

                $scope.goLegal = function() {
                    $state.go('app.legal');
                }


            } // end of controller function
        ]
    );
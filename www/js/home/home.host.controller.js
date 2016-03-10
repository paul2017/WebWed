angular.module('WebWedApp')

    .controller('HomeHostCtrl',
        ['$scope', '$state', '$ionicHistory',
            function($scope, $state, $ionicHistory) {

                $scope.icon_blue = '';
                $scope.icon_yellow = '';
                $scope.icon_fav = '';

                $scope.clickHeartButton = function() {

                    if ($scope.icon_blue == '') {
                        $scope.icon_blue = 'active';
                        $scope.icon_yellow = 'active';
                    }
                    else {
                        $scope.icon_blue = '';
                        $scope.icon_yellow = '';
                    }

                    if ($scope.icon_fav == 'active') {
                        $scope.icon_fav = '';
                    }
                    else {
                        $scope.icon_fav = 'active';
                    }
                }


            } // end of controller function
        ]
    );
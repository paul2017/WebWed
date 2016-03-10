angular.module('WebWedApp')

    .controller('IntroCtrl',
        ['$scope', '$state', '$ionicSlideBoxDelegate',
            function($scope, $state, $ionicSlideBoxDelegate) {

                $scope.slideIndex = 0;

                // Called each time the slide changes
                $scope.slideChanged = function(index) {
                    console.log('slideChanged: ' + index);

                    $scope.slideIndex = index;
                }

                // Call previous slide
                $scope.previous = function() {
                    $ionicSlideBoxDelegate.previous();
                }

                // Call next slide
                $scope.next = function() {
                    $ionicSlideBoxDelegate.next();
                }

                //

            } // end of controller function
        ]
    );
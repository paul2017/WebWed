angular.module('WebWedApp')

    .controller('HomeGuestCtrl',
        ['$scope', '$state', '$cordovaInAppBrowser', '$ionicHistory', 'ENDPOINT_LIST', '$localStorage',
            function($scope, $state, $cordovaInAppBrowser, $ionicHistory, ENDPOINT_LIST, $localStorage) {

                $scope.bubbles = [
                    {
                        src: 'img/bubble-chat.svg',
                        pos: 0
                    },
                    {
                        src: 'img/bubble-gift.svg',
                        pos: 15
                    },
                    {
                        src: 'img/bubble-heart.svg',
                        pos: 22
                    },
                    {
                        src: 'img/bubble-clock.svg',
                        pos: 43
                    },
                    {
                        src: 'img/bubble-link.svg',
                        pos: 60
                    }
                ];

                $scope.showBubble = false;
                $scope.bubbleIndex = -1;

                $scope.doBubble = function() {

                    if (! $scope.showBubble) {
                        $scope.showBubble = true;
                        $scope.bubbleIndex = 0;

                        $scope.bubble = $scope.bubbles[$scope.bubbleIndex].src;
                        $scope.marginLeft = $scope.bubbles[$scope.bubbleIndex].pos + '%';
                    }
                }

                $scope.nextBubble = function() {
                    if ($scope.bubbleIndex < 4) {
                        $scope.bubbleIndex++;

                        $scope.bubble = $scope.bubbles[$scope.bubbleIndex].src;
                        $scope.marginLeft = $scope.bubbles[$scope.bubbleIndex].pos + '%';
                    }
                    else {
                        $scope.showBubble = false;
                        $scope.bubbleIndex = -1;
                    }
                }

                $scope.goChat = function() {
                    var options = {
                        location: 'yes',
                        clearcache: 'yes',
                        toolbar: 'yes'
                    };

                    $cordovaInAppBrowser.open(ENDPOINT_LIST.CHAT_PAGE, '_blank', options).then(
                        function(event) {
                            // success
                        }
                    ).catch(
                        function(event) {
                            // error
                        }
                    );
                }

                $scope.goGift = function() {
                    var options = {
                        location: 'yes',
                        clearcache: 'yes',
                        toolbar: 'yes'
                    };

                    $cordovaInAppBrowser.open(ENDPOINT_LIST.GIFT_PAGE, '_blank', options).then(
                        function(event) {
                            // success
                        }
                    ).catch(
                        function(event) {
                            // error
                        }
                    );
                }

                // First help
                var storage = $localStorage.$default({
                    first_help: true
                });

                if (storage.first_help) {
                    $localStorage['first_help'] = false;
                    $scope.doBubble();
                }

            } // end of controller function
        ]
    );
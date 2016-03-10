angular.module('WebWedApp', ['ionic', 'ngCordova', 'ngStorage', 'WebWedApp.constant'])

    .run(function($rootScope, $ionicPlatform, $ionicModal, $cordovaNetwork, $localStorage, $state) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //
            // Check first time open
            //
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////
            var storage = $localStorage.$default({
                first_run: true
            });

            if (storage.first_run) {
                $localStorage['first_run'] = false;
                $state.go('intro');
            }
            else {
                $state.go('login-startup');
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //
            // Dialog : No Internet Connection
            //
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////

            // No Internet Connection dialog
            $ionicModal.fromTemplateUrl('templates/no-connection/no-connection.html', {
                scope: $rootScope
            }).then(function(modal) {
                $rootScope.noConnectionModal = modal;
            });

            $rootScope.showNoConnectionDialog = function() {
                $rootScope.noConnectionModal.show();
            }

            $rootScope.hideNoConnectionDialog = function() {
                $rootScope.noConnectionModal.hide();
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //
            // Check internet connection status
            //
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////

            // listen for Online event
            $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
                console.log('cordovaNetwork:online => ' + networkState);

                $rootScope.hideNoConnectionDialog();
            });

            // listen for Offline event
            $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
                console.log('cordovaNetwork:offline => ' + networkState);

                $rootScope.showNoConnectionDialog();
            });
        });
    })

    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.previousTitleText(false);

        $stateProvider

            .state('intro', {
                url: '/intro',
                templateUrl: 'templates/intro/intro.html',
                controller: 'IntroCtrl'
            })

            .state('login-startup', {
                url: '/login-startup',
                templateUrl: 'templates/auth/login.startup.html',
                controller: 'LoginStartupCtrl'
            })

            .state('login-wedding-party', {
                url: '/login-wedding-party',
                templateUrl: 'templates/auth/login.wedding-party.html',
                controller: 'LoginWeddingPartyCtrl'
            })

            .state('login-invited-guest', {
                url: '/login-invited-guest',
                templateUrl: 'templates/auth/login.invited-guest.html',
                controller: 'LoginInvitedGuestCtrl'
            })

            .state('terms-of-service', {
                url: '/terms-of-service/:navButton',
                templateUrl: 'templates/legal/terms-of-service.html',
                controller: 'TermsOfServiceCtrl'
            })

            .state('privacy-policy', {
                url: '/privacy-policy/:navButton',
                templateUrl: 'templates/legal/privacy-policy.html',
                controller: 'PrivacyPolicyCtrl'
            })

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/sidemenu/menu.html',
                controller: 'AppCtrl',
                cache: false
            })

            .state('app.terms-of-service', {
                url: '/terms-of-service/:navButton',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/legal/terms-of-service.html',
                        controller: 'TermsOfServiceCtrl'
                    }
                }
            })

            .state('app.privacy-policy', {
                url: '/privacy-policy/:navButton',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/legal/privacy-policy.html',
                        controller: 'PrivacyPolicyCtrl'
                    }
                }
            })

            .state('app.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/about/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })

            .state('app.legal', {
                url: '/legal',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/legal/legal.html'
                    }
                }
            })

            .state('app.account', {
                url: '/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/account/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: '/contact',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/contact/contact.html',
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.home-guest', {
                url: '/home-guest',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home/home.guest.html',
                        controller: 'HomeGuestCtrl'
                    }
                }
            })

            .state('app.home-host', {
                url: '/home-host',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home/home.host.html',
                        controller: 'HomeHostCtrl'
                    }
                }
            })

        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/intro');
    });

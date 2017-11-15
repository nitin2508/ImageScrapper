(function() {
    'use strict';
    angular.module('ImageScrapper')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider,
            $urlRouterProvider, $locationProvider) {

            $stateProvider
                .state('profile', {
                    url: '/',
                    views: {
                        'header': {
                            template: '<header-component></header-component>'
                        },
                        'body': {
                            template: '<scrape-input-component></scrape-input-component>'
                        }
                    },
                })
                .state('listing', {
                    url: '/image/:keyword',
                    views: {
                        'header': {
                            template: '<header-component></header-component>'
                        },
                        'body': {
                            template: '<image-listing-component></image-listing-component>'
                        }
                    },
                })

            $urlRouterProvider.otherwise('/');
        }]);
})();

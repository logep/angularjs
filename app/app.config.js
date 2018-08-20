'use strict';

angular.module('todo').config([ '$locationProvider','$urlRouterProvider','$stateProvider',
// angular.module('todo').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $urlRouterProvider,$stateProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/phones');
        // $stateProvider.when('/phones', {
        //     template: '<phone-list></phone-list>'
        // }).when('/phones/:phoneId', {
        //    template: '<phone-detail></phone-detail>'
        // }).
        $stateProvider.state({
            name: 'phones',
            url: '/phones',
            template: '<phone-list></phone-list>'
        }).state({
            name: 'hello',
            url: '/phones/:phoneId',
            template: '<phone-detail></phone-detail>'
        })
        // $urlRouterProvider.otherwise('/phones');
    }
]);

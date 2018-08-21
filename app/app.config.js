'use strict';

angular.module('TdAdmin').config([ '$locationProvider','$urlRouterProvider','$stateProvider',
// angular.module('TdAdmin').config(['$locationProvider', '$routeProvider',
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
            name: 'table',
            url: '/table',
            template: '<phone-table></phone-table>'
        }).state({
            name: 'detail',
            url: '/phones/:phoneId',
            template: '<phone-detail></phone-detail>'
        })
        // $urlRouterProvider.otherwise('/phones');
    }
]);

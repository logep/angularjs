  'use strict';

  angular.module('TdAdmin.pages.tables', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tables', {
          url: '/tables',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TablesPageCtrl',
          title: 'Tables',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('tables.basic', {
          url: '/basic',
          templateUrl: 'app/pages/tables/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        })
    $urlRouterProvider.when('/tables','/tables/basic');
  }


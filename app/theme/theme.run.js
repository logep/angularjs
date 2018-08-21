
  'use strict';

  angular.module('TdAdmin.theme')
    .run(themeRun);
  /** @ngInject */
  function themeRun($timeout, $rootScope) {
    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 0);
  }


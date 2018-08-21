
  'use strict';

  angular.module('theme')
    .run(themeRun);
  /** @ngInject */
  function themeRun($timeout, $rootScope) {
    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 2000);
  }


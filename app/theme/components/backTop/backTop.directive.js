  'use strict';
  angular.module('theme.components')
      .directive('backTop', backTop);
  /** @ngInject */
  function backTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/backTop/backTop.html',
      controller: function () {
        document.getElementById('backTop').onclick=function () {
            document.documentElement.scrollTop=document.body.scrollTop=0;
        }
        // $('#backTop').backTop({
        //   'position': 200,
        //   'speed': 100
        // });
      }
    };
  }


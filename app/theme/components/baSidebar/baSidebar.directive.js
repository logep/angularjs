
  'use strict';

  angular.module('TdAdmin.theme.components')
      .directive('baSidebar', baSidebar);
  /** @ngInject */
  function baSidebar() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/baSidebar/ba-sidebar.html',
      controller: 'BaSidebarCtrl',
      link: function(scope, el) {
        scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
        scope.$on('$destroy', function() {
        });

      }
    };
  }


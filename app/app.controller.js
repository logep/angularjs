/**
 * Main application controller
 *
 */
 ;(function() {

    angular
    .module('TdAdmin')
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];


    function TodoController($scope) {

        // 'controller as' syntax
        var vm = this;

    };

})();
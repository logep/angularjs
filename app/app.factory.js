;(function() {

    angular
    .module('TdAdmin')
    .factory('Test', Test);

    Test.$inject = ['$http'];

    ////////////

    function Test($http) {

        return {
            variable: variable
        }

        ////////////  function definitions

        function variable() {
            return 'test';
        }
        
    };


})();
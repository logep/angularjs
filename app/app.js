;(function() {

    /**
     * Definition of the main app module and its dependencies
     */
    angular
        .module('TdAdmin',[  'ngAnimate','ui.router',
            'core',
            'phoneDetail',
            'phoneList',
            'TdAdmin.theme',
            'TdAdmin.pages',
            ]);

    // angular
    //         .module('TdAdmin',[  'ngAnimate','ngRoute',
    //             'core',
    //             'phoneDetail',
    //             // 'phoneList',
    //         ]);


})();


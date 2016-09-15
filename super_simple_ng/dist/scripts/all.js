(function() {
    angular.module('app', [
        // custom modules
        'simple',
        // 3rd party modules
        'ui.router'
    ])
    .config(function($urlRouterProvider, $stateProvider) {
        var helloState = {
            name: 'index',
            url: '/index',
            templateUrl: './templates/main.html'
        }
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state(helloState);
    });
})();
(function() {
    angular.module('simple', [
        
    ]);
})();
(function() {
    'use strict';

    angular
        .module('simple')
        .controller('fileCtrl', fileCtrl);
    
    fileCtrl.$inject = [];

    // implementation
    function fileCtrl() {
        var vm = this;

        
    }
})();
(function() {
    angular.module('simple')
        .controller('infoCtrl', infoCtrl);

    function infoCtrl() {
        var vm = this;

        vm.user = {
            name: "Alex Quang",
            address: {
                street: 'Horizon Court',
                city: 'Imperial Capital',
                planet: 'Aqua'
            },
            friends: [
                'Xuan',
                'Quang',
                'Trung'
            ],
            rank: null
        };
        vm.knightMe = knightMe;

        // implementations
        function knightMe(rank) {
            vm.user.rank = vm.user.rank ? null : rank;
            return rank;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('simple')
        .directive('bkeUploadFiles', bkeUploadFiles);

    // implementation
    function bkeUploadFiles() {
        var directive = {
            restrict: 'E',
            templateUrl: './templates/fileupload.html',
            controller: 'fileCtrl',
            controllerAs: 'vm'
        };

        return directive;
    }
})();
(function() {
    'use strict';

    angular.module('simple')
        .directive('bkeUserInfoCard', bkeUserInfoCard);
    
    // implementation
    function bkeUserInfoCard() {
        var directive = {
            restrict: 'E',
            templateUrl: './templates/userinfo.html',
            controller: 'infoCtrl',
            controllerAs: 'vm'
        };

        return directive;
    }
})();
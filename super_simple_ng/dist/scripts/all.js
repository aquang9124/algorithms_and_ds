(function() {
    angular.module('app', [
        // custom modules
        'app.component',
        // 3rd party modules
        'ui.router'
    ])
    .config(function($urlRouterProvider, $stateProvider) {
        var helloState = {
            name: 'index',
            url: '/index',
            template: '<simple-comp><simple-comp>'
        }
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state(helloState);
    });
})();
(function(angular) {
    angular.module('app.component', [
        // custom modules
        'simple'
    ]);
})(angular);
(function() {
    angular.module('simple', [
        
    ]);
})();
(function() {
    angular.module('simple')
        .controller('SimpChildCtrl', SimpChildCtrl);

    function SimpChildCtrl() {
        
    }
})();
(function() {
    angular.module('simple')
        .controller('SimpleCtrl', SimpleCtrl);

    function SimpleCtrl() {
        var vm = this;

        vm.questions = [
            { title: 'Documents please', content: 'I need those documents' },
            { title: 'Apples please', content: "I'm out of fruit" }
        ];
    }
})();
(function() {
    'use strict';

    var simpChild = {
        templateUrl: './templates/simpchild.html',
        controller: 'SimpChildCtrl',
        bindings: {
            questions: '<'
        }
    };

    angular.module('simple')
        .component('simpChild', simpChild);
})();
(function(angular) {
    'use strict';

    var simpleComp = {
        templateUrl: './templates/simple.html',
        controller: 'SimpleCtrl as parent',
    };

    angular.module('simple')
        .component('simpleComp', simpleComp);

})(angular);
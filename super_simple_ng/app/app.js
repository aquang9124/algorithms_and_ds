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
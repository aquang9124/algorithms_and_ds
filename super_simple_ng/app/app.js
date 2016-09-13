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
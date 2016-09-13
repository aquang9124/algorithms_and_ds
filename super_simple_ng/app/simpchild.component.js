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
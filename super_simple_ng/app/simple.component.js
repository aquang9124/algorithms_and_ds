(function(angular) {
    'use strict';

    var simple = {
        templateUrl: './templates/simple.html',
        controller: 'SimpleCtrl as parent',
    };

    angular.module('simple')
        .component('simple', simple);
        
})(angular);
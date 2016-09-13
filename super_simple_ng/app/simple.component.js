(function(angular) {
    'use strict';

    var simpleComp = {
        templateUrl: './templates/simple.html',
        controller: 'SimpleCtrl as parent',
    };

    angular.module('simple')
        .component('simpleComp', simpleComp);

})(angular);
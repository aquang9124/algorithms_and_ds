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
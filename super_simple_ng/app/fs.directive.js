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
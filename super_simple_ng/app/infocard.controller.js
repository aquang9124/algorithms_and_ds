(function() {
    angular.module('simple')
        .controller('infoCtrl', infoCtrl);

    function infoCtrl() {
        var vm = this;

        vm.user = {
            name: "Alex Quang"
        };
    }
})();
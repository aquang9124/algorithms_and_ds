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
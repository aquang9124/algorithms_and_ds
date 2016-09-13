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
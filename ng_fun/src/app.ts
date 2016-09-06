import AppComponent from './app.component';

const root = angular
    .module('root', [
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default root;
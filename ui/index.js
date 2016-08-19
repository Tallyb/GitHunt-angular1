import angular from 'angular';

import app from './app.module';

import './style.css';

angular.element(document).ready(() => {
    angular.bootstrap(document.body, [
        app
    ]);
});

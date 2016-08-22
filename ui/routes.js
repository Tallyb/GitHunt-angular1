
export default function routes ($stateProvider, $locationProvider, $urlRouterProvider) {
    "use strict";
    'ngInject';

    //$locationProvider.html5Mode(true);

    $stateProvider
        .state ('feed', {
            url: '/feed/:type',
            template: '<feed></feed>'
        })

        .state ('submit', {
            url: '/submit',
            template: '<new-entry></new-entry>'
        })

        .state ('repo', {
            url: '/:org/:repoName',
            template: '<comments-page></comments-page>'
        })
        .state ('loginError', {
            url: 'loginError',
            template: '<div> Error in login </div>'
        })


    ;



    $urlRouterProvider.when('/','/feed/top');
}
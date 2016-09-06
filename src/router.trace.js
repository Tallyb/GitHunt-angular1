

export default function routerTrace ($rootScope, $location){
    "use strict";
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        console.log('stateChangeSuccess to ' + toState.name + '- fired when the transition succeeds. toState,toParams : \n', toState, toParams);
    });

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to '+toState.name+'- from state: '+fromState.name +'fired when the transition begins. toState,toParams : \n',toState, toParams);
    });


    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        console.log('$stateChangeError - fired when an error occurs during transition with error: ' + error);
        $location.path("/");
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
        console.log('$stateNotFound ' + unfoundState.name + '  - fired when a state cannot be found by its name.');
        console.log(unfoundState, fromState, fromParams);
    });
}

routerTrace.$inject = ['$rootScope', '$location'];
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';
import 'angular-moment';

import apollo from './apollo';

import { GitHunt }   from './githunt';
import Navigation from './navigation';
import routes from './routes';

let app = angular.module ('app', [
    uiRouter,
   'angularMoment',
    apollo
])
        .config(['apolloProvider', (apolloProvider) => {
            apolloProvider.setClient({
                networkInterface: {
                    url: '/graphql',
                    options: {
                        credentials: 'same-origin'
                    }
                }
            });
        }])
        //.config (routes)
        .constant("moment", moment)
        .component ('gitHunt', GitHunt )
        .component ('navigation', Navigation)

;


export default app.name;
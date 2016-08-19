import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';
import 'angular-moment';

import apollo from './apollo';

import { GitHunt }   from './githunt';
import Navigation from './navigation';
import Loading from './loading';
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
        .config (routes)
        .constant("moment", moment)
        .component ('gitHunt', GitHunt )
        .component ('navigation', Navigation)
        .component ('loading', Loading)

;


export default app.name;
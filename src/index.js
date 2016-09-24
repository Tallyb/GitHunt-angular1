import angular from 'angular';
import uiRouter from 'angular-ui-router';
import moment from 'moment';
import 'angular-moment';
import 'angular1-async-filter';

import apollo from './apollo';

import GitHunt      from './app/githunt.component';
import Navigation   from './app/navigation.component';
import shared       from './app/shared';
import feed         from './app/feed';
import Profile      from './app/profile.component';
import AppService   from './app/app.service';
import NewEntry     from './app/new-entry.component';

import routes from './routes';
import routerTrace from './router.trace';
import './style.css';

let app = angular.module ('app', [
        uiRouter,
        'angularMoment',
        apollo,
        feed,
        shared,
        'asyncFilter'
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
        .config     (routes)
        .run        (routerTrace)
        .service    ("AppService", AppService)
        .constant   ("moment",  moment)
        .component  ('gitHunt', GitHunt )
        .component  ('navigation', Navigation)
        .component  ('profile', Profile)
        .component  ('newEntry', NewEntry)
    ;




angular.element(document).ready(() => {
    angular.bootstrap(document.body, [
        'app'
    ]);
});

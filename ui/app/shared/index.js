import angular from 'angular';

import EmojifyFilter from    './emojify.filter';
import infoLabel  from './info-label.component';
import Loading    from './loading.component';

let module = angular.module ('shared', [ ])
        .filter     ('emojifyFilter', EmojifyFilter)
        .component  ('infoLabel', infoLabel)
        .component  ('loading', Loading)
    ;

export default module.name;

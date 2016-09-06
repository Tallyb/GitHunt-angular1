import angular from 'angular';

import Emojify from    './emojify.filter';
import infoLabel    from './info-label.component';
import Loading      from './loading.component';
import RepoInfo     from './repo-info.component';

let module = angular.module ('shared', [ ])
        .filter     ('emojify', Emojify)
        .component  ('infoLabel', infoLabel)
        .component  ('loading', Loading)
        .component  ('repoInfo', RepoInfo)
    ;

export default module.name;

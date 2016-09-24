import angular from 'angular';

import Emojify from    './emojify.filter';
import InfoLabel    from './info-label.component';
import Loading      from './loading.component';
import RepoInfo     from './repo-info.component';

let module = angular.module ('shared', [ ])
        .filter     ('emojify', Emojify)
        .component  ('infoLabel', InfoLabel)
        .component  ('loading', Loading)
        .component  ('repoInfo', RepoInfo)
    ;

export default module.name;

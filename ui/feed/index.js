import angular from 'angular';

import Feed from './feed';
import feedService from './feed.service';
import feedEntry  from './feed-entry';

let module = angular.module ('feed', [ ])
        .service    ('feedService', feedService)
        .component  ('feed', Feed)
        .component  ('feedEntry', feedEntry)
    ;

export default module.name;
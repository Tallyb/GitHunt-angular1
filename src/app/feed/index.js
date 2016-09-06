import angular from 'angular';

import Feed from    './feed.component';
import FeedService  from './feed.service.component';
import FeedEntry    from './feed-entry.component';
import VoteButtons  from './vote-buttons.component';

let module = angular.module ('feed', [ ])
        .service    ('feedService', FeedService)
        .component  ('feed', Feed)
        .component  ('feedEntry', FeedEntry)
        .component  ('voteButtons', VoteButtons)
    ;

export default module.name;
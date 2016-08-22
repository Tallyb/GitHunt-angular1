import angular from 'angular';

import Feed from    './feed';
import FeedService  from './feed.service';
import FeedEntry    from './feed-entry';
import VoteButtons  from './vote-buttons';

let module = angular.module ('feed', [ ])
        .service    ('feedService', FeedService)
        .component  ('feed', Feed)
        .component  ('feedEntry', FeedEntry)
        .component  ('voteButtons', VoteButtons)
    ;

export default module.name;
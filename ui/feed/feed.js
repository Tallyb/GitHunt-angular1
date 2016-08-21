import gql from 'graphql-tag';

const template = `
    <loading ng-if="$ctrl.data.loading"></loading>
    <div ng-if="!$ctrl.data.loading">
      <feed-entry
        ng-repeat="entry in $ctrl.data.feed"
        entry="entry"
        current-user="$ctrl.data.currentUser"
        on-vote="$ctrl.onVote({repo: repo, voteType: voteType})">
      </feed-entry>
      <a ng-click="$ctrl.fetchMore()">Load more</a>
    </div>
`;

class controller {

    apollo = undefined;
    data = {
        loading: true
    };
    type = {};

    offset = 0;
    itemsPerPage = 10;

    feedService;
    feedObservable;

    constructor (feedService, $state){
        'use strict';
        'ngInject';

        this.feedService = feedService;
        this.type = $state.params.type;
    }

    onVote(event) {
        this.vote(event.repoFullName, event.type);
    }

    $onInit () {
        console.log ('onInit');


        this.feedService.getFeed (this.type, this.offset, this.itemsPerPage)
            .then((result) => {
                this.data.feed = result.data.feed;
                this.data.loading = false;
            }, (err) => {
                console.log (err);
            }
        );

        // this.feedObservable = this.feedService.watchFeed (this.type, this.offset, this.itemsPerPage);
        // this.feedObservable.subscribe ((res)=>{
        //     console.dir (res);
        // });

    }

    fetchMore() {
        this.feedObservable.fetchMore({
            variables: {
                offset: this.offset + this.itemsPerPage,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.data) { return prev; }
                return Object.assign({}, prev, {
                    feed: [...prev.feed, ...fetchMoreResult.data.feed],
                });
            },
        });
        this.offset += this.itemsPerPage;
    }

}

const Feed = {
    template,
    controller,
};

export default Feed;




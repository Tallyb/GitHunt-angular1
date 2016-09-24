import gql from 'graphql-tag';
import {} from '../../apollo'

const feedQuery = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    currentUser {
      login
    }
    feed(type: $type, offset: $offset, limit: $limit) {
      createdAt
      score
      commentCount
      id
      postedBy {
        login
        html_url
      }
      vote {
        vote_value
      }
      repository {
        name
        full_name
        description
        html_url
        stargazers_count
        open_issues_count
        created_at
        owner {
          avatar_url
        }
      }
    }
  }
`;
const voteMutation = gql`
  mutation vote($repoFullName: String!, $type: VoteType!) {
    vote(repoFullName: $repoFullName, type: $type) {
      score
      id
      vote {
        vote_value
      }
    }
  }
`;


const template = `
    <loading ng-if="$ctrl.data.loading"></loading>
    <div>
      <feed-entry
        ng-repeat="entry in $ctrl.data.feed | async:this"
        entry="entry"
        current-user="$ctrl.data.currentUser"
        on-vote="$ctrl.onVote({repo: repo, voteType: voteType})">
      </feed-entry>
      <a ng-click="$ctrl.fetchMore()">Load more</a>
    </div>
`;

class controller {

    $scope;
    apollo;
    data = {
        loading: true
    };
    type = {};
    offset = 0;
    itemsPerPage = 10;

    feedObs;

    constructor (apollo, $state, $scope){
        'use strict';
        'ngInject';

        this.apollo = apollo;
        this.type = $state.params.type;
        this.$scope = $scope;
    }

    onVote(event) {
        this.vote(event.repoFullName, event.type);
    }

    $onInit () {
        this.feedObs = this.apollo.watchQuery({
            query: feedQuery,
            variables: {
                type: this.type.toUpperCase(),
                offset: this.offset,
                limit: this.itemsPerPage,
            },
            forceFetch: true,
        });

        this.feedSub = this.feedObs.subscribe(({data, loading}) => {
            console.log (data, loading);
            this.data = data;
            this.currentUser = data.currentUser;
            this.data.loading = loading;
            this.$scope.$apply();
        });
    }

    fetchMore() {
        this.feedObs.fetchMore({
            variables: {
                offset: this.offset + this.itemsPerPage,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult.data) {
                    return prev;
                }
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




const template = `
<div class="media">
      <div class="media-vote">
        <vote-buttons
          score="$ctrl.entry.score"
          vote="$ctrl.entry.vote"
          can-vote="!!$ctrl.currentUser"
          on-vote="$ctrl.onButtonVote($event)">
        </vote-buttons>
      </div>
      <div class="media-left">
        <a href="#">
          <img
            class="media-object"
            style="width: 64px; height: 64px"
            ng-src="{{$ctrl.entry.repository.owner.avatar_url}}"
          />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">
          <a ng-href="{{$ctrl.entry.repository.html_url}}">
            {{ $ctrl.entry.repository.full_name }}
          </a>
        </h4>
        <repo-info
          full-name="$ctrl.entry.repository.full_name"
          description="$ctrl.entry.repository.description"
          stargazers-count="$ctrl.entry.repository.stargazers_count"
          open-issues-count="$ctrl.entry.repository.open_issues_count"
          created-at="$ctrl.entry.createdAt"
          user-url="$ctrl.entry.postedBy.html_url"
          username="$ctrl.entry.postedBy.login"
          commentCount="$ctrl.entry.commentCount">
        </repo-info>
      </div>
    </div>
`;

class controller  {
    org;
    repoName;

    $onInit() {
        const parts = this.entry.repository.full_name.split('/');
        this.org = parts[0];
        this.repoName = parts[1];
    }

    onButtonVote(type) {
        this.onVote({
            repoFullName: this.entry.repository.full_name,
            type,
        });
    }
}

const FeedEntry = {
    template,
    controller,
    bindings: {
        entry: '<',
        currentUser: '<',
        onVote: '&'
    }
};

export default FeedEntry

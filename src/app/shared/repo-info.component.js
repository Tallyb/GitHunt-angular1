const template = `
<p> {{ $ctrl.description | emojify }}</p>
    <p>
      <info-label
        label="Stars"
        value="$ctrl.stargazersCount">
      </info-label>
      &nbsp;
      <info-label
        label="Issues"
        value="$ctrl.openIssuesCount">
      </info-label>
      <span ng-if="$ctrl.commentCount || $ctrl.commentCount === 0">
        &nbsp;
        <a ui-sref="['/', org, repoName]">
        View comments ({{ $ctrl.commentCount }})
        </a>
      </span>
      &nbsp;&nbsp;&nbsp;
      Submitted <!--{{ $ctrl.createdAt | amTimeAgo }}-->
      &nbsp;by&nbsp;
      <a ng-href="{{$ctrl.userUrl}}">{{ $ctrl.username }}</a>
    </p>
`;

class controller {

    org;
    repoName;

    $onInit() {
        const parts = this.fullName.split('/');

        this.org = parts[0];
        this.repoName = parts[1];
    }
}

const RepoInfo = {
    template,
    controller,
    bindings:  {
        fullName: '<',
        description: '<',
        stargazersCount: '<',
        openIssuesCount: '<',
        createdAt: '<',
        userUrl: '<',
        username: '<',
        commentCount: '<',
    }
};

export default RepoInfo;
const template = `
<span>
      <button
        class="btn btn-score"
        ng-class="{active: $ctrl.vote.vote_value === 1}"
       ng-click="$ctrl.voteUp()">
        <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
      </button>
      <div class="vote-score">{{ score }}</div>
      <button
        class="btn btn-score"
        ng-class="{active: $ctrl.vote.vote_value === -1}"
        ng-click="$ctrl.voteDown()">
        <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
      </button>
      &nbsp;
    </span>
`;

class controller {

    voteUp () {
        this.submitVote('UP');
    }

    voteDown() {
        this.submitVote('DOWN');
    }

    submitVote (type) {
        if (this.canVote === true) {
            const voteValue = {
                UP: 1,
                DOWN: -1,
            }[type];

            this.onVote (this.vote.vote_value === voteValue ? 'CANCEL' : type);
        }
    }
}

const VoteButtons = {
    template,
    controller,
    bindings: {
        canVote: '<',
        score: '<',
        vote: '<',
        onVote: '&'
    }
};

export default VoteButtons;
const template = `
<span>
      <button
        class="btn btn-score"
        ng-class="{active: vote.vote_value === 1}"
       ng-click="voteUp()">
        <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>
      </button>
      <div class="vote-score">{{ score }}</div>
      <button
        class="btn btn-score"
        ng-class="{active: vote.vote_value === -1}"
        ng-click="voteDown()">
        <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
      </button>
      &nbsp;
    </span>
`;

class controller {

}


const VoteButtons = {
    template,
    controller,
    bindings: {

    }
};

export default VoteButtons;
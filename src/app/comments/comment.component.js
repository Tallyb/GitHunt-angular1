const template = `
 <div class="comment-box">
      <b>{{content | emojify}}</b>
      <br />
    Submitted issue {{$ctrl.createdAt | amTimeAgo}}  <a ng-ref="{{$ctrl.userUrl}}">{{$ctrl.username}}</a>
    </div>
  `;

class controller {
}

const Comments = {
  template,
  controller,
  bindings: {
      username: '<',
      userUrl: '<',
      content: '<',
      createdAt: '<',
    },
};

export default Comments;

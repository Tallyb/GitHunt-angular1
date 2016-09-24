const template = `
 <loading *ngIf="data.loading"></loading>
  <div *ngIf="!data.loading">
    <div>
      <h1>Comments for 
        <a [href]="data.entry.repository.html_url">
        {{data.entry.repository.full_name}}
        </a></h1>
      <repo-info
        [fullName]="data.entry.repository.full_name"
        [description]="data.entry.repository.description"
        [stargazersCount]="data.entry.repository.stargazers_count"
        [openIssuesCount]="data.entry.repository.open_issues_count"
        [createdAt]="data.entry.createdAt"
        [userUrl]="data.entry.postedBy.html_url"
        [username]="data.entry.postedBy.login"
        [commentCount]="data.entry.commentCount">
      </repo-info>
      <form *ngIf="data.currentUser" (ngSubmit)="submitForm()">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="newComment"
              name="newCommentContent"
              [(ngModel)]="newComment"
              placeholder="Write your comment here!"
            />
          </div>
          <div *ngIf="submitComment.errors" class="alert alert-danger" role="alert">
            {{submitComment.errors[0].message}}
          </div>
          <div *ngIf="noCommentContent" class="alert alert-danger" role="alert">
            Comment must have content.
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <div *ngIf="!data.currentUser"><em>Log in to comment.</em></div>
      </div>
      <br />
      <div *ngIf="data.entry.comments">
        <comment
          *ngFor="let comment of data.entry.comments"
          [username]="comment.postedBy.login"
          [content]="comment.content"
          [createdAt]="comment.createdAt"
          [userUrl]="comment.postedBy.html_url">
        </comment>
      </div>
    </div>
  `;

class controller {
  org;
  repoName;
  data;
  newComment;
  noCommentContent;

    // submitComment: (
    //     repoFullName: string,
    //     repoId: string,
    //     commentContent: string,
    //     currentUser: string
    // ) => Promise<ApolloQueryResult>;

  constructor() {
    this.noCommentContent = false;
  }

  $onInit() {
    this.paramsSub = this.route.params
        .subscribe(params => {
          this.org = params.org;
          this.repoName = params.repoName;
        });
  }

  submitForm() {
    this.noCommentContent = false;

    const repositoryName = this.data.entry.repository.full_name;
    const repoId = this.data.entry.id;
    const currentUser = this.data.currentUser;

    if (!this.newComment) {
      this.noCommentContent = true;
    } else {
      this.submitComment(repositoryName, repoId, this.newComment, currentUser).then(() => {
        this.newComment = '';
      });
    }
  }
}

const CommentsPage = {
  template,
  controller,
};

export default CommentsPage;

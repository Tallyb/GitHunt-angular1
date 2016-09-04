import AppService from './app.service';

const template = `
     <div>
      <h1>Submit a repository</h1>

      <form ng-submit="$ctrl._submitForm()" name="form">
        <div class="form-group">
          <label for="repositoryInput">
            Repository name
          </label>

          <input
            type="text"
            class="form-control"
            placeholder="apollostack/GitHunt"
            ng-model="$ctrl.repoFullName"
            required
          />
        </div>
        <div ng-if="$ctrl.error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>

        <button type="submit" class="btn btn-primary" ng-disabled="form.$invalid">
          Submit
        </button>
      </form>
    </div>
  `;

class controller {
    error;
    repoFullName;
    submitRepository;
    $state;
    appService;


    constructor($state, AppService) {
        this.$state = $state;
        this.appService = AppService;
    }

    _submitForm() {
        this.error = null;
        this.appService.submitRepository(this.repoFullName).then(({data}) => {
            this.$state.go('feed', {type: 'new'});
        }).catch((errors) => {
            this.error = errors.graphQLErrors[0].message;
        });
    }
}

controller.$inject = ['$state', 'AppService'];

const NewEntry = {
    template,
    controller
};


export default NewEntry;

const template = `
<p ng-if="$ctrl.data.loading" class="navbar-text navbar-right">
      Loading...
    </p>
    <span ng-if="!$ctrl.data.loading && $ctrl.data.currentUser">
      <p class="navbar-text navbar-right">
        {{$ctrl.data.currentUser.login}}
        &nbsp;
        <a href="/logout">Log out</a>
      </p>
      <a
        class="btn navbar-btn navbar-right btn-success" ui-sref="submit" role="button">
        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
          &nbsp;
          Submit
      </a>
    </span>
    <p ng-if="!$ctrl.data.loading && !$ctrl.data.currentUser" class="navbar-text navbar-right">
      <a href="/login/github">Log in with GitHub</a>
    </p>
  `;

class controller {
    data = {};
    appService;
    $window;

    constructor (AppService, $window){
        'use strict';

        this.appService = AppService;
        this.$window = $window;
    }

    getUserProfile (){
        this.appService.getCurrentUserProfile().then (
            (res) => {
                this.data = res.data;
            });
    }

    $onInit (){
        this.getUserProfile();
    }
    login (){

        this.appService.githubLogin().then (()=>{
            console.log ('client login');
            this.getUserProfile();
        })
    }
}

const Profile = {
    template,
    controller
};

Profile.$inject = ['AppService', '$window'];

export default Profile;


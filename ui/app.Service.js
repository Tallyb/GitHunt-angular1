import gql from 'graphql-tag';

class AppService {

    apollo = undefined;
    $http = undefined;

    constructor (apollo, $http) {
        this.apollo = apollo;
        this.$http = $http;
    }

    CurrentUserForProfile =  gql`
      query CurrentUserForProfile {
        currentUser {
          login
          avatar_url
        }
      }
    `;

    getCurrentUserProfile (){
        return this.apollo.query({
            query: this.CurrentUserForProfile,
        });
    }

    githubLogin () {
        return this.$http.jsonp('/login/github',).then ((res) => {
            console.log ('login');
            return res;
        } )
    }

}

AppService.$inject = ['apollo', '$http'];
export default  AppService;
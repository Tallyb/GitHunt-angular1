import gql from 'graphql-tag';

class AppService {

    apollo = undefined;
    $http = undefined;

    constructor (apollo) {
        this.apollo = apollo;
    }


    getCurrentUserProfile (){
        const query =  gql`
          query CurrentUserForProfile {
            currentUser {
              login
              avatar_url
            }
          }
        `;

        return this.apollo.query({
            query,
        });
    }

    submitRepository (repoFullName){

        const mutation = gql `
            mutation submitRepository($repoFullName: String!) {
                submitRepository(repoFullName: $repoFullName) {
                    createdAt
                }
            }
        `;

        return this.apollo.mutate ({
            mutation,
            variables: {
                repoFullName
            }
        });
    }
}

AppService.$inject = ['apollo'];

export default  AppService;
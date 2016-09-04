import gql from 'graphql-tag';

class FeedService {
    apollo = undefined;

    constructor (apollo) {
        this.apollo = apollo;
    }

     feedQuery = gql`
                query Feed($type: FeedType!, $offset: Int, $limit: Int) {
                   feed (type: $type, offset:$offset, limit: $limit) {
                       createdAt
                       score
                       commentCount
                       id
                       postedBy {
                         login
                         html_url
                       }
                       vote {
                         vote_value
                       }
                       repository {
                         name
                         full_name
                         description
                         html_url
                         stargazers_count
                         open_issues_count
                         created_at
                         owner {
                          avatar_url
                         }
                       }
                   }
                }
            `;

    getFeed (type, offset, limit) {
        return this.apollo.query({
            query: this.feedQuery,
            variables: {
                type: type ? type.toUpperCase() : 'TOP',
                offset: offset,
                limit: limit,
            },
            forceFetch: true
        })
    }

    watchFeed (type, offset, limit) {
        return this.apollo.watchQuery({
            query: this.feedQuery,
            variables: {
                type: type ? type.toUpperCase() : 'TOP',
                offset: offset,
                limit: limit,
            },
            forceFetch: true
        })
    }

    getRepoComments (repoName) {

        const query = gql`
          query Comment($repoName: String!) {
            # Eventually move this into a no fetch query right on the entry
            # since we literally just need this info to determine whether to
            # show upvote/downvote buttons
            currentUser {
              login
              html_url
            }
            entry(repoFullName: $repoName) {
              id
              postedBy {
                login
                html_url
              }
              createdAt
              comments {
                postedBy {
                  login
                  html_url
                }
                createdAt
                content
              }
              repository {
                full_name
                html_url
                description
                open_issues_count
                stargazers_count
              }
            }
          }
        `;

        return



    }


    vote (repo, voteType) {
        return this.apollo.mutation ({
            query: gql `
                mutation vote ($repoFullName: String!, $type: VoteType!) {
                    vote(repoFullName: $repoFullName, type: $type) {
                      repository {
                        name
                        full_name
                      }
                                score
                      id
                      vote {
                        vote_value
                      }
                    }
                }
            `,
            variables: {
                repoFullName: repo,
                type: voteType
            }

        })
    }
}

FeedService.$inject = ['apollo'];

export default FeedService;
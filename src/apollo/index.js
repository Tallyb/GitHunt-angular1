import angular from 'angular';
import ApolloClient, {createNetworkInterface, addTypename}  from 'apollo-client';

function ApolloProvider() {
    let _client;

    this.setClient = (config) =>{
        "use strict";
        if (config.networkInterface) {
            config.networkInterface =  createNetworkInterface(config.networkInterface.url || '/graphql', config.networkInterface.options);
        }
        //ToDo TypeName

        _client = new ApolloClient(config);
    };

    // this.defaultClient = (client) => {
    //     _client = client;
    // };

    this.$get = ['$q', ($q) => ({
        query(options) {
            this._check();

            return this._wrapper(_client.query(options));
        },

        mutate(options) {
            this._check();

            return this._wrapper(_client.mutate(options));
        },

        watchQuery(options) {
            this._check();
            return _client.watchQuery(options);
        },

        _check() {
            if (!_client) {
                throw new Error('Missing client');
            }
        },

        _wrapper(promise) {
            return $q((resolve, reject) => {
                promise.then(resolve).catch(reject);
            });
        }
    })];
}

export default angular.module('apollo', [])
    .provider('apollo', ApolloProvider)
    .name
;


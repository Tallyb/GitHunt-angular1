import angular from 'angular';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { rxify, RxObservableQuery } from 'apollo-client-rxjs';

function ApolloProvider() {
  let _client;

  this.setClient = (config) => {
    if (config.networkInterface) {
      config.networkInterface = createNetworkInterface(config.networkInterface.url || '/graphql', config.networkInterface.options);
    }
        // ToDo TypeName

    _client = new ApolloClient(config);
  };

    // this.defaultClient = (client) => {
    //     _client = client;
    // };

  this.$get = ['$q', ($q) => ({
    query(options) {
      this.check();
      return this.wrapper(_client.query(options));
    },

    mutate(options) {
      this.check();
      return this.wrapper(_client.mutate(options));
    },

    watchQuery(options) {
      this.check();
      return new RxObservableQuery(rxify(_client.watchQuery)(options));
    },

    check() {
      if (!_client) {
        throw new Error('Missing client');
      }
    },

    wrapper(promise) {
      return $q((resolve, reject) => {
        promise.then(resolve).catch(reject);
      });
    },
  })];
}

export default angular.module('apollo', [])
    .provider('apollo', ApolloProvider)
    .name
;


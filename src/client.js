import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';

// Polyfill fetch
import 'whatwg-fetch';


export const client = new ApolloClient({
    networkInterface: createNetworkInterface('/graphql', {
        credentials: 'same-origin',
    }),
    queryTransformer: addTypename,
    dataIdFromObject: (result) => {
        if (result.id && result.__typename) {
            return result.__typename + result.id;
        }
        return null;
    },
    shouldBatch: true,
});


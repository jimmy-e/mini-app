import 'babel-polyfill';
import * as React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
// @ts-ignore
import { createRoot } from 'react-dom';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import App from './app';

const URI = 'mini-server-1.herokuapp.com/graphql';

const wsLink = new WebSocketLink({
  uri: `ws://${URI}`,
  options: { reconnect: true },
});

const httpLink = new HttpLink({
  credentials: 'include',
  uri: `http://${URI}`,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('app')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

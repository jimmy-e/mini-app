import 'babel-polyfill';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
// @ts-ignore
import { createRoot } from 'react-dom';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';
import App from './app';

const URI = 'https://mini-server-1.herokuapp.com/graphql';

const link = createHttpLink({
  uri: URI,
  credentials: 'include'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const Spa: React.FC = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById("app");
ReactDOM.render(<Spa />, rootElement);

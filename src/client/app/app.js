import React from 'react';
import {render} from 'react-dom';

import gql from 'graphql-tag';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:5000/graphql' }),
  cache: new InMemoryCache()
});



class App extends React.Component {
  render () {
    return <p> Hello React project</p>;  }
}
const MY_QUERY = gql`query Place { place { name, id } }`;

const AppWithData = graphql(MY_QUERY)(App)
render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById('app')
);

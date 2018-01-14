import React from 'react';
import {render} from 'react-dom';

import { ApolloProvider, graphql } from 'react-apollo';
import client from './graphql/client';
import { PlacesQuery } from './graphql/queries';

class App extends React.Component {
  render () {
    return <p> Hello React project</p>;
  }
}

const AppWithData = graphql(PlacesQuery, {
  options: { variables: { location: '42.3601,-71.0589' } }
})(App);
render(
  <ApolloProvider client={client}>
    <AppWithData />
  </ApolloProvider>,
  document.getElementById('app')
);

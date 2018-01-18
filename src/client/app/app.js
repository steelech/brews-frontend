import React from 'react';
import {render} from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import BreweriesWithData from '../app/components/Breweries';

import styles from '../styles/app.less';

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    )
  }
}


render(
  <ApolloProvider client={client}>
    <App>
      <BreweriesWithData />
    </App>
  </ApolloProvider>,
  document.getElementById('app')
);

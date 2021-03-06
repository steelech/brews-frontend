import React from 'react';
import {render} from 'react-dom';
import 'font-awesome/less/font-awesome.less';

import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import Breweries from '../app/components/Breweries';

import styles from '../styles/app.less';

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}


render(
  <ApolloProvider client={client}>
    <App>
      <Breweries />
    </App>
  </ApolloProvider>,
  document.getElementById('app')
);

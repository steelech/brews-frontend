import React from 'react';
import { graphql } from 'react-apollo';
import { PlacesQuery, BreweriesQuery } from '../graphql/queries';
import styles from '../../styles/components/breweries.less';

class Breweries extends React.Component {
  render () {
    return (
      <div className='breweries'>
        <h1>Breweries</h1>
        {
          !this.props.data.loading
            ? <div>
                {
                  this.props.data.breweries.map(brewery => (
                    <div>{brewery.name}</div>
                  ))
                }
              </div>
            : <div>
                Loading
              </div>
        }
      </div>
    )
  }
}

const BreweriesWithData = graphql(BreweriesQuery)(Breweries)

export default BreweriesWithData;

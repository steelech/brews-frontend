import React from 'react';
import { graphql, withApollo } from 'react-apollo';

import { BreweriesQuery } from '../../graphql/queries';

import BreweryListItem from '../../components/breweries/BreweryListItem';

class BreweryList extends React.Component {
  render() {
    return (
      <div>
        {
          !this.props.data.loading
            ? <div>
                {
                  this.props.data.breweries.map(brewery => (
                    <BreweryListItem brewery={brewery} />
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

const BreweryListWithData = graphql(BreweriesQuery, {
  options: ({ location, radius }) => ({ variables: { radius: radius, location: location } })
})(BreweryList)

export default BreweryListWithData;

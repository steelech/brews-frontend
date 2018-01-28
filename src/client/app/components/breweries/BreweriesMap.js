import React from 'react';
import { BreweriesQuery } from '../../graphql/queries';
import { graphql, withApollo } from 'react-apollo';
import Map from '../../components/breweries/breweries-map/Map';
import List from '../../components/breweries/breweries-map/List';
import LocationForm from '../../components/breweries/LocationForm';
import styles from '../../../styles/components/breweries/breweries-map.less';


class BreweriesMap extends React.Component {
  render() {
    if (this.props.data.loading) {
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <div className='breweries-map'>
        <div className='sidebar'>
          <LocationForm
            startLocation={this.props.location}
            name='Current Location'
            onSubmit={this.props.onSubmit}
          />
          <List breweries={this.props.data.breweries}/>
        </div>
        <Map location={this.props.location} radius={this.props.radius} breweries={this.props.data.breweries} />
      </div>
    )
  }
}

const BreweriesMapWithData = graphql(BreweriesQuery, {
  options: ({ location, radius }) => ({ variables: { radius: radius, location: location } })
})(BreweriesMap)

export default BreweriesMapWithData;

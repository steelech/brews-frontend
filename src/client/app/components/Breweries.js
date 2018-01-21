import React from 'react';
import { BreweriesQuery } from '../graphql/queries';

import BreweryListWithData from '../components/breweries/BreweryList';
import LocationForm from '../components/breweries/LocationForm';
import LocationModal from '../components/breweries/LocationModal';
import styles from '../../styles/components/breweries.less';

class Breweries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      radius: 5,
      loading: true
    }
  }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position) => {
        let positionString = `${position.coords.latitude},${position.coords.longitude}`
        this.setState({
          location: positionString,
          loading: false,
        })
      })
  }
  onFormSubmit(data) {
    let updated = {};
    if (data.location != '') {
      updated.location = data.location;
    }
    if (data.radius != '') {
      updated.radius = data.radius;
    }
    this.setState(updated);
  }

  render () {
    return (
      <div className='breweries'>
        <div className='breweries-header'>
          <h1>Breweries</h1>
        </div>
        {
          this.state.loading
            ? <div>
                Loading
              </div>
            : <div>
                <LocationForm
                  startLocation={this.state.location}
                  onSubmit={(data) => this.onFormSubmit(data)}
                  name='Current Location'
                />
                <BreweryListWithData radius={this.state.radius} location={this.state.location}/>
              </div>
        }
      </div>
    )
  }
}

export default Breweries;

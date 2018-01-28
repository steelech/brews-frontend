import React from 'react';
import { BreweriesQuery } from '../graphql/queries';
import BreweriesMapWithData from '../components/breweries/BreweriesMap';

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
        {
          this.state.loading
            ? <div>
                Loading
              </div>
            : <BreweriesMapWithData
              radius={this.state.radius}
              location={this.state.location}
              onSubmit={(data) => this.onFormSubmit(data)}
              />
        }
      </div>
    )
  }
}

export default Breweries;

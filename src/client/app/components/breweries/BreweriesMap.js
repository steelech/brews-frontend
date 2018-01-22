import React from 'react';
import styles from '../../../styles/components/breweries/breweries-map.less';

class BreweriesMap extends React.Component {
  componentDidMount() {
    var myLatLng = {lat: +this.props.location.split(',')[0], lng: +this.props.location.split(',')[1]};
    let map = new window.google.maps.Map(document.getElementById('breweries-map'), {
      center: myLatLng,
      zoom: 8
    });
  }
  render () {
    return (
      <div
        id='breweries-map-wrapper'
        className='breweries-map-wrapper'
      >
        <div id='breweries-map'></div>
      </div>
    )
  }
}

export default BreweriesMap;

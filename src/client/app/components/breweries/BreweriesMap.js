import React from 'react';
import styles from '../../../styles/components/breweries/breweries-map.less';
import BluCircle from '../../../assets/blu-circle.png';
import BluBlank from '../../../assets/blu-blank.png';
import RedCircle from '../../../assets/red-circle.png';

class BreweriesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }
  handleMarkerClick(thisMarker) {
    this.state.markers.forEach((marker) => {
      if (marker.marker == thisMarker) {
        marker.marker.setIcon(BluCircle)
        marker.infoWindow.open(this.map, thisMarker)
      } else {
        marker.marker.setIcon(BluBlank);
        marker.infoWindow.close();
      }
    })
  }
  addMarkers() {
    var breweries = this.props.breweries;
    var bounds = new google.maps.LatLngBounds();
    var markers = [];
    breweries.map((brewery) => {
      var contentString = brewery.name;
      var contentString = `
        <div>
          ${brewery.name}
        </div>
        <div>
          ${brewery.formattedAddress}
        </div>
      `
      var marker = new window.google.maps.Marker({
        map: this.map,
        title: brewery.name,
        position: {
          lat: brewery.latitude,
          lng: brewery.longitude
        },
        icon: BluBlank
      });
      var infoWindow = new window.google.maps.InfoWindow({
        content: contentString
      })
      markers.push({
        marker,
        infoWindow
      })
      marker.addListener('click', () => this.handleMarkerClick(marker));
      bounds.extend(marker.getPosition())
    })
    this.map.fitBounds(bounds);
    this.setState({
      markers
    })
  }
  componentDidMount() {
    var myLatLng = {lat: +this.props.location.split(',')[0], lng: +this.props.location.split(',')[1]};
    this.map = new window.google.maps.Map(document.getElementById('breweries-map'), {
      center: myLatLng,
      zoom: 15
    });
    this.service = new google.maps.places.PlacesService(this.map);
    this.addMarkers()
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

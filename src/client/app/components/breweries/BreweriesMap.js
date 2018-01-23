import React from 'react';
import styles from '../../../styles/components/breweries/breweries-map.less';

class BreweriesMap extends React.Component {
  addMarkers(breweries) {
    var bounds = new google.maps.LatLngBounds();
    breweries.map((brewery) => {
      var contentString = brewery[0].name;
      var contentString = `
        <div>
          ${brewery[0].name}
        </div>
        <div>
          ${brewery[0].formatted_address}
        </div>
      `
      var marker = new window.google.maps.Marker({
        map: this.map,
        title: brewery[0].name,
        position: brewery[0].geometry.location
      });
      var infoWindow = new window.google.maps.InfoWindow({
        content: contentString
      })
      marker.addListener('click', () => {
        infoWindow.open(this.map, marker)
      })
      bounds.extend(marker.getPosition())
    })
    this.map.fitBounds(bounds);
  }
  getBrewery(brewery, index) {
    return new Promise((resolve, reject) => {
      var query = `${brewery.name}, ${brewery.streetAddress}, ${brewery.locality}, ${brewery.region} ${brewery.postalCode}`
      var request = {
        location: this.map.getCenter(),
        radius: this.props.radius,
        query
      }
      setTimeout(() => {
        this.service.textSearch(request, (results, status) => {
          console.log('query: ', query);
          console.log('results: ', results);
          console.log('status: ', status)
          resolve(results)
        })
      }, 300 * index)
    })
  }
  getBreweries() {
    return new Promise((resolve, reject) => {
      let counter = 0;
      var promises = this.props.breweries.map((brewery, index) => {
        return this.getBrewery(brewery, index)
      });
      Promise.all(promises)
        .then((results) => {
          resolve(results);
        })
    })
  }
  componentDidMount() {
    var myLatLng = {lat: +this.props.location.split(',')[0], lng: +this.props.location.split(',')[1]};
    this.map = new window.google.maps.Map(document.getElementById('breweries-map'), {
      center: myLatLng,
      zoom: 15
    });
    this.service = new google.maps.places.PlacesService(this.map);

    this.getBreweries()
      .then((results) => this.addMarkers(results))
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

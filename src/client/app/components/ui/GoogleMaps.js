import React from 'react';

import styles from '../../../styles/components/ui/google-maps.less';

class GoogleMaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      name: this.props.name
    }
  }
  handleLocationSelection(e, marker) {
    debugger
  }
  componentDidMount() {
    var myLatLng = {lat: +this.props.location.split(',')[0], lng: +this.props.location.split(',')[1]};
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 8
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
    window.google.maps.event.addDomListener(marker, 'click', (e) => this.handleLocationSelection(e, marker))

    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    searchBox.addListener('places_changed', () => {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      var bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        let marker = new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
        window.google.maps.event.addDomListener(marker, 'click', (e) => this.handleLocationSelection(e, place))
        markers.push(marker);

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
  render() {
    return (
      <div>
        <input id="pac-input" className="controls" type="text" placeholder="Search Box" />
        <div id='map'></div>
      </div>
    )
  }
}

export default GoogleMaps;

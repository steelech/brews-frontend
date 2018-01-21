import React from 'react';
import styles from '../../../styles/components/breweries/location-form.less';
import LocationModal from '../../components/breweries/LocationModal';


class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.startLocation,
      radius: '',
      isOpen: false,
      name: this.props.name
    }
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleLocationChange(place) {
    this.setState({
      name: place.name,
      location: place.location,
      isOpen: false
    })
  }
  handleRadiusChange(event) {
    this.setState({
      radius: event.target.value
    })
  }
  handleSubmit() {
    this.props.onSubmit({
      location: this.state.location,
      radius: this.state.radius
    })
  }
  render() {
    return (
      <div className='location-form'>
        <div className='location-chooser'>
          <div className='location-chooser-label'>
            Location:
          </div>
          <div
            className='location-chooser-button-wrapper'
            onClick={() => this.toggleModal()}
            >
            {this.state.name}
          </div>
        </div>

        <div className='radius-input'>
          <div className='radius-input-label'>
            Radius:
          </div>
          <div className='radius-input-wrapper'>
            <input
              type='text'
              value={this.state.radius}
              onChange={(e) => this.handleRadiusChange(e)}
              placeholder='miles'
            />
          </div>
        </div>
        <div className='location-form-submit'>
          <div
            onClick={() => this.handleSubmit()}
            className='location-form-submit-button'
          >
            Go
          </div>
        </div>
        <LocationModal
          onClose={() => this.toggleModal()}
          show={this.state.isOpen}
          location={this.state.location}
          name={this.state.name}
          onSubmit={(place) => this.handleLocationChange(place)}
        />
      </div>
    )
  }
}

export default LocationForm;

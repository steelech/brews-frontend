import React from 'react';
import Modal from '../ui/Modal';
import GoogleMaps from '../ui/GoogleMaps';
import styles from '../../../styles/components/breweries/location-modal.less';

class LocationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      location: this.props.location,
    }
  }
  onSelectLocation({ name, location }) {
    this.setState({
      name,
      location
    })
  }
  render() {
    return (
      <Modal
        show={this.props.show}
        onClose={this.props.onClose}
      >
        <div className='location-modal'>
          <GoogleMaps
            name={this.state.name}
            location={this.state.location}
            onSelectLocation={(place) => this.onSelectLocation(place)}
          />
          <div className='location-modal-controls'>
            <h1>
              Choose location
            </h1>
            <div className='location'>
              {this.state.name}
            </div>
            <div className='buttons-container'>
              <div
                className='location-modal-submit'
                onClick={() => this.props.onSubmit(this.state)}
              >
                Go
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default LocationModal;

import React from 'react';
import Modal from '../ui/Modal';
import GoogleMaps from '../ui/GoogleMaps';
import styles from '../../../styles/components/breweries/location-modal.less';

class LocationModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onClose={this.props.onClose}
      >
        <div className='location-modal'>
          <GoogleMaps location={this.props.location}/>
        </div>
      </Modal>
    )
  }
}

export default LocationModal;

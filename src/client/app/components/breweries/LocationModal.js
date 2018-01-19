import React from 'react';
import Modal from '../ui/Modal';
import GoogleMaps from '../ui/GoogleMaps';
import styles from '../../../styles/components/breweries/location-modal.less';

class LocationModal extends React.Component {
  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <Modal>
        <div className='location-modal'>
          <GoogleMaps location={this.props.location}/>
        </div>
      </Modal>
    )
  }
}

export default LocationModal;

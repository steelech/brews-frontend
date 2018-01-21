import React from 'react';
import styles from '../../../styles/components/ui/modal.less'


class Modal extends React.Component {
  handleClose(e) {
    this.props.onClose();
  }
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div
        className='backdrop'
        onClick={(e) => this.handleClose(e)}
      >
        <div className='modal'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;

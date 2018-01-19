import React from 'react';
import styles from '../../../styles/components/ui/modal.less'


class Modal extends React.Component {
  render() {
    return (
      <div className='backdrop'>
        <div className='modal'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
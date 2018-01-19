import React from 'react';
import styles from '../../../styles/components/breweries/location-form.less';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      radius: ''
    }
  }
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
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
        <div className='location-input'>
          <label>
            Location:
            <input
              type='text'
              value={this.state.location}
              onChange={(e) => this.handleLocationChange(e)}
              placeholder='lat,long'
            />
          </label>
        </div>
        <div className='radius-input'>
          <label>
            Radius:
            <input
              type='text'
              value={this.state.radius}
              onChange={(e) => this.handleRadiusChange(e)}
              placeholder='miles'
            />
          </label>
        </div>
        <div className='location-form-submit'>
          <div onClick={() => this.handleSubmit()}>
            Submit
          </div>
        </div>
      </div>
    )
  }
}

export default LocationForm;

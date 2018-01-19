import React from 'react';

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
      <div>
        <input type='text' value={this.state.location} onChange={(e) => this.handleLocationChange(e)}/>
        <input type='text' value={this.state.radius} onChange={(e) => this.handleRadiusChange(e)}/>
        <div onClick={() => this.handleSubmit()}>
          Submit
        </div>
      </div>
    )
  }
}

export default LocationForm;

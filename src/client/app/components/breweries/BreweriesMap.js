import React from 'react';
import { BreweriesQuery } from '../../graphql/queries';
import { graphql, withApollo } from 'react-apollo';
import Map from '../../components/breweries/breweries-map/Map';
import List from '../../components/breweries/breweries-map/List';
import LocationForm from '../../components/breweries/LocationForm';
import styles from '../../../styles/components/breweries/breweries-map.less';


const OpenToggle = () => <i className="fa fa-caret-left"></i>;
const CloseToggle = () => <i className="fa fa-caret-right"></i>

const ListToggle = (props) => {
  var className = 'closed';
  var Component = CloseToggle;
  if (props.open) {
    className = 'open';
    Component = OpenToggle;
  }
  return (
    <div
      className={`list-toggle ${className}`}
      onClick={props.onClick}
    >
      <Component />
    </div>
  )
}

class BreweriesMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: null,
      open: true,
    }
  }
  handleMouseEnter(data) {
    this.setState({
      hovered: data
    })
  }
  handleMouseLeave(data) {
    this.setState({
      hovered: null
    })
  }
  onListToggle() {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    if (this.props.data.loading) {
      return (
        <div>
          Loading
        </div>
      )
    }
    return (
      <div className='breweries-map'>
        <ListToggle
          open={this.state.open}
          onClick={() => this.onListToggle()}
        />
        {
          this.state.open
           ? <div className='sidebar'>
               <LocationForm
                 startLocation={this.props.location}
                 name='Current Location'
                 onSubmit={this.props.onSubmit}
               />
               <List
                 breweries={this.props.data.breweries}
                 onMouseEnter={(data) => this.handleMouseEnter(data)}
                 onMouseLeave={(data) => this.handleMouseLeave(data)}
               />
             </div>
           : null
        }
        <Map
          hovered={this.state.hovered}
          location={this.props.location}
          radius={this.props.radius}
          breweries={this.props.data.breweries}
        />
      </div>
    )
  }
}

const BreweriesMapWithData = graphql(BreweriesQuery, {
  options: ({ location, radius }) => ({ variables: { radius: radius, location: location } })
})(BreweriesMap)

export default BreweriesMapWithData;

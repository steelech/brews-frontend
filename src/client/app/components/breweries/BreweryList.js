import React from 'react';
import { graphql, withApollo } from 'react-apollo';

import { BreweriesQuery } from '../../graphql/queries';

import BreweryListItem from '../../components/breweries/BreweryListItem';
import BreweriesMap from '../../components/breweries/BreweriesMap';
import styles from '../../../styles/components/breweries/brewery-list.less';


class BreweryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: null
    }
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(brewery) {
    this.setState({
      hovered: brewery
    })
  }
  handleMouseLeave(brewery) {
    this.setState({
      hovered: null
    })
  }
  render() {
    return (
      <div className='brewery-list'>
        {
          !this.props.data.loading
            ? <div className='brewery-list-wrapper'>
                <div className='brewery-list-content'>
                  {
                    this.props.data.breweries.map(brewery => (
                      <BreweryListItem
                        brewery={brewery}
                        onHover={(brewery) => this.handleHover(brewery)}
                        onLeave={(brewery) => this.handleMouseLeave(brewery)}
                      />
                    ))
                  }
                </div>
                <div className='brewery-map-wrapper'>
                  <BreweriesMap
                    hovered={this.state.hovered}
                    location={this.props.location}
                    breweries={this.props.data.breweries}
                    radius={this.props.radius}
                  />
                </div>
              </div>
            : <div>
                Loading
              </div>
        }
      </div>
    )
  }
}

const BreweryListWithData = graphql(BreweriesQuery, {
  options: ({ location, radius }) => ({ variables: { radius: radius, location: location } })
})(BreweryList)

export default BreweryListWithData;

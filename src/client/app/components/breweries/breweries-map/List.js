import React from 'react';
import styles from '../../../../styles/components/breweries/breweries-map/list.less';
import BreweryListItem from '../BreweryListItem';

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        Breweries
        {
          this.props.breweries.map(brewery =>
            <BreweryListItem
              brewery={brewery}
              onHover={this.props.onMouseEnter}
              onLeave={this.props.onMouseLeave}
            />
          )
        }
      </div>
    )
  }
}

export default List;

import React from 'react';
import styles from '../../../../styles/components/breweries/breweries-map/list.less';

class List extends React.Component {
  render() {
    return (
      <div className='list'>
        List
        {
          this.props.breweries.map(brewery =>
            <div>
              {brewery.name}
            </div>
          )
        }
      </div>
    )
  }
}

export default List;

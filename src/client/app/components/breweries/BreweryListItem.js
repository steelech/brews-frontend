import React from 'react';
import styles from '../../../styles/components/breweries/brewery-list-item.less';

const BreweryListItem = (props) => {
  return (
    <div className='brewery-list-item'>
      <div>
        {props.brewery.name}
      </div>
      <div>
        {+props.brewery.distance.toFixed(2)} miles
      </div>
    </div>
  )
}

export default BreweryListItem;

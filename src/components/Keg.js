import React from 'react';
import PropTypes from ' prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick= { () => props.whenKegClicked(props.id) }>
        <h3>{props.name} -- {props.brand}</h3>
        <p><em>{props.flavor}</em> -- {props.price}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;
import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} -- {props.type}</h3>
        <p>{props.flavor}</p>
        <p>${props.price} per Pint</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
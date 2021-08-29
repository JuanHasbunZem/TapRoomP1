import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg} = props;
  function handleSellButton() {
    const newPints = keg.pints -= 1;
    props.onClickingSell({name: keg.name, brand: keg.brand, price: keg.price, type: keg.type, pints: newPints, id: keg.id})
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h2>{keg.name} -- {keg.type}</h2>
      <h2>{keg.brand}</h2>
      <h3>${keg.price} per Pint</h3>
      <h3>Pints Left in Keg: {keg.pints}</h3>
      <button disabled={keg.pints === 0 ? true : false} onClick={handleSellButton}>Sell a Pint</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSell: PropTypes.func
};

export default KegDetail;
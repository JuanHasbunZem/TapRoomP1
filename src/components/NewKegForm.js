import { v4 } from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  return(
    <React.Fragment>
      <h3>Add a new Keg</h3>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' /><br />
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' /><br />
        <input
          type='text'
          name='type'
          placeholder='Keg Type' /><br />
        <input
          type='number'
          name='price'
          placeholder='Price per Pint' /><br />
        <button type='submit'>Add new Keg</button>
        <br />
      </form>
    </React.Fragment>
  );
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, type: event.target.type.value, pints: 124, price: event.target.price.value, id: v4()})
  };
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
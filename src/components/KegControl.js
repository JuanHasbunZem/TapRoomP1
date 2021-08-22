import React from 'react';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterKegList: [
        {name: 'Dark Iron Brew', brand: 'Dark Iron', price: '$8.25', flavor: 'Dark Rum', id: 0, amount: 50},
        {name: 'Coors Light', brand: 'Coors', price: '$7.40', flavor: 'Lager', id: 1, amount: 50},
        {name: 'Blue Moon', brand: 'Blue Moon', price: '$9.75', flavor: 'Belgin Wheats', id: 2, amount: 50},
        {name: 'Ghostfish Gluten FreeIPA', brand: 'Ghost Fish', price: '$8.25', flavor: 'IPA', id: 3, amount: 50}
      ],
      selectedKeg: null
    };
  }


  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState( prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  handleNewKegSubmission = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

handleSelect = (id) => {
  const selectedKeg = this.state.masterKegList.filter(m => m.id === id)[0];
  this.setState({selectedKeg: selectedKeg});
}

render(){
  let currentlyVisibileState = null;
  let buttonText = null;

  if(this.state.selectedKeg != null){
    currentlyVisibileState = <KegDetail keg = {this.state.selectedKeg} />
    buttonText = "Return to TapRoom";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibileState = <NewKegForm onNewFormSubmit = {this.handleNewKegSubmission} />;
    buttonText = "Return to TapRoom";
  } else {
    currentlyVisibileState = <KegList KegList = {this.state.masterKegList} onKegSelect={this.handleSelect} />
    buttonText = "Add a new Keg";
  }
  return (
    <React.Fragment>
      {currentlyVisibileState}
      <hr />
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}
}

export default KegControl;
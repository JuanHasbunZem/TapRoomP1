import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterKegList: [],
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
      formVisibleOnPage: false,
      selectedKeg: null
    });
  }

  handleSelect = (id) => {
    const selectedKeg = this.state.masterKegList.filter(m => m.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPints = (bevToSell) => {
    const soldMainKegList = this.state.newMasterKegList
    .filter(keg => keg.id != this.state.selectedKeg.id)
    .concat(bevToSell);
    this.setState({
      masterKegList: soldMainKegList
    });
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
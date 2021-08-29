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
      selectedKeg: null
    };
  }


  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState( prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleNewKegSubmission = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
  }

  handleKegSelection = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellingPints = (bevToSell) => {
    const soldMainKegList = this.state.masterKegList
    .filter(keg => keg.id !== this.state.selectedKeg.id)
    .concat(bevToSell);
    this.setState({
      masterKegList: soldMainKegList
    });
  }

  render(){
    let currentlyVisibileState = null;
    let buttonText = null;

    if(this.state.selectedKeg != null){
      currentlyVisibileState = <KegDetail keg = {this.state.selectedKeg} onClickingSell = {this.handleSellingPints} />
      buttonText = "Return to TapRoom";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibileState = <NewKegForm onNewFormSubmit = {this.handleNewKegSubmission} />;
      buttonText = "Return to TapRoom";
    } else {
      currentlyVisibileState = <KegList kegList = {this.state.masterKegList} onKegSelect={this.handleKegSelection} />
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
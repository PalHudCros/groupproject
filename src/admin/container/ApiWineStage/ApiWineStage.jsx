import React, {Component} from 'react';
import {connect} from "react-redux";
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import AddBox from 'material-ui/svg-icons/content/add-box';
import MinusBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import CashSymbol from 'material-ui/svg-icons/editor/monetization-on';
import Close from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {removeOneWineFromAPIStage, removeAllWineFromAPIStage, sendAPIWinesToDistributor} from "../../ducks/distributionDuck";

export class ApiWineStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: []
      , stagedWines: []
    };
  }

  checkStagedWines( context ) {
    let props;

    if ( context ) {
      props = context;
    } else {
      props = this.props;
    }

    this.setState( { wines: props.distribution.stagedWines } );
    const stagedWines = props.distribution.stagedWines.map(wine => {
      wine.LabelImage = wine.Labels[0].Url;
      wine.BottleImage = wine.LabelImage.substring(0, wine.LabelImage.length-5) + "d.jpg";

      return (

        <div key={ wine.Id } className="stage-wine-row-wrapper admin">
        <div className="stage-wine-row admin">
          <div className="stage-wine-image admin">

            <img height="100%" src={ wine.BottleImage } alt={ wine.Name } />
          </div>
          <div className="stage-wine-name admin">

              <h2>{ wine.Name }</h2>
          </div>
          <div className="stage-wine-varietal-vintage admin">
            <h3>{ wine.Varietal.Name } ({ wine.Vintage })</h3>
          </div>
          <div className="stage-wine-qty admin">
            <div className="stage-counter-field-wrapper admin">
              <MuiThemeProvider>
                <TextField
                  hintText="Qty"
                  hintStyle={{ marginLeft: "30%" }}
                  className="stage-counter-field admin"
                  type="number"
                  min={0}
                  defaultValue={ wine.Quantity }
                  onChange={ this.handleChange.bind(this, wine) }
                  />
              </MuiThemeProvider>
            </div>

          </div>
          <div className="stage-wine-remove-button admin">
            <MuiThemeProvider>
              <Close
                onClick={ this.removeOneWineFromStage.bind(this, wine) }
                style={{ cursor: "pointer" }}
                ></Close>
            </MuiThemeProvider>
          </div>
        </div>
        <MuiThemeProvider>
          <Divider />
        </MuiThemeProvider>
      </div>

      )});
      this.setState( { stagedWines } );
  }

  handleChange(wine, event) {
    wine.Quantity = parseInt( event.target.value );
    const newWines = this.state.wines;
    for (var i = 0; i < newWines.length; i++) {
      if ( newWines[i].Id === wine.Id ) {
        newWines.splice( i, 1, wine );
        this.setState( { wines: newWines } );
      }
    }
  }

  clearOrder() {
    this.props.dispatch( removeAllWineFromAPIStage() );
  }

  orderWinesFromAPI() {
    for (var i = 0; i < this.state.wines.length; i++) {
      this.props.dispatch( sendAPIWinesToDistributor( this.state.wines[i] ) );
    }
    this.props.dispatch( removeAllWineFromAPIStage() );
  }

  removeOneWineFromStage( wine ) {
    this.props.dispatch( removeOneWineFromAPIStage( wine ) );
  }

  componentWillMount() {
    if ( this.props.distribution.stagedWines[0] ) {
      this.checkStagedWines();
    }
  }

  componentWillReceiveProps(props) {
    this.checkStagedWines(props);
  }

  render() {
    return (
        <div className="api-wines-stage-wrapper admin">
          <div className="stage-title-order-button-wrapper admin">
            <div className="stage-title admin">
              <h1>Vineyard Purchase Order</h1>
            </div>
            <div className="stage-clear-button admin">
              <MuiThemeProvider>
                <FlatButton
                  label="Clear Order"
                  onClick={ this.clearOrder.bind(this) }
                  />
              </MuiThemeProvider>
            </div>
            <div className="stage-order-button admin">
              <MuiThemeProvider>
                <RaisedButton
                  label="Send Order"
                  labelPosition="before"
                  primary={true}
                  icon={<CashSymbol />}
                  onClick={ this.orderWinesFromAPI.bind(this) }
                  />
              </MuiThemeProvider>
            </div>
          </div>

          <div className="stage-list-wrapper admin">

              { this.state.stagedWines }

          </div>

        </div>
    );

  }

}

export default connect(state => ( { distribution: state.distribution } ) )( ApiWineStage );

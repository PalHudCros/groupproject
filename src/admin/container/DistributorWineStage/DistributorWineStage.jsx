import React, {Component} from 'react';
import {connect} from "react-redux";
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import AddBox from 'material-ui/svg-icons/content/add-box';
import MinusBox from 'material-ui/svg-icons/toggle/indeterminate-check-box';
import RaisedButton from 'material-ui/RaisedButton';
import CashSymbol from 'material-ui/svg-icons/editor/monetization-on';
import Close from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class DistributorWineStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wines: []
    };
  }

  checkStagedWines( context ) {
    let props;

    if ( context ) {
      props = context;
    } else {
      props = this.props;
    }

    const stagedWines = props.inventory.stagedWines.map(wine => {
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
                  hintStyle={{ marginLeft: "24%" }}
                  className="stage-counter-field admin"
                  type="number"
                  min="0"
                  />
              </MuiThemeProvider>
            </div>
            <div className="stage-counter-incrementors admin">
              <div className="stage-increment-up admin">
                <MuiThemeProvider>
                  <AddBox></AddBox>
                </MuiThemeProvider>
              </div>
              <div className="stage-increment-down admin">
                <MuiThemeProvider>
                  <MinusBox></MinusBox>
                </MuiThemeProvider>
              </div>
            </div>
          </div>
          <div className="stage-wine-remove-button admin">
            <MuiThemeProvider>
              <Close></Close>
            </MuiThemeProvider>
          </div>
        </div>
        <MuiThemeProvider>
          <Divider />
        </MuiThemeProvider>
      </div>

      )});
      this.setState( {wines: stagedWines });
  }

  componentWillMount() {
    if ( this.props.inventory.stagedWines[0] ) {
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
              <h1>Distributor Purchase Order</h1>
            </div>
            <div className="stage-order-button admin">
              <MuiThemeProvider>
                <RaisedButton
                  label="Send Order"
                  labelPosition="before"
                  primary={true}
                  icon={<CashSymbol />}
                  />
              </MuiThemeProvider>
            </div>
          </div>

          <div className="stage-list-wrapper admin">

              { this.state.wines }

          </div>

        </div>
    );

  }

}

export default connect(state => ( { inventory: state.inventory } ) )( DistributorWineStage );

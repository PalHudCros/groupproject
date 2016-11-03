import React, {Component} from 'react';
import {connect} from "react-redux";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class RecentlyAdded extends Component {
  constructor(props) {
    super(props);

    this.state = {
        addedWines: []
    };
  }

  componentWillMount() {

  }

  componentWillReceiveProps(props) {
    const categories = props.inventory.wines.map(category => (
        <div className="stage-wine-row-wrapper">

          <div key={ wine.id } className="row stage-wine-row admin">
            <div className="col-xs-3 stage-wine-image admin">

              <img height="100%" src={ wine.BottleImage } alt=""/>
            </div>
            <div className="col-xs-5 stage-wine-name admin">
              <h2>{ wine.Name }</h2>
              <h3>{ wine.Varietal.Name } ({ wine.Vintage })</h3>
            </div>
            <div className="col-xs-2 stage-wine-qty admin">

            </div>
            <div className="col-xs-2 stage-wine-remove-button admin">

            </div>
          </div>
          <Divider />
        </div>
    ));
    this.setState({addedWines: categories});
  }

  render() {
    return (
        <div className="api-wines-stage-wrapper admin">
          <div className="stage-title-wrapper admin">
            <h1>Order These Wines From API</h1>
          </div>
          <MuiThemeProvider>
            <Paper zDepth={2}>
              {this.state.addedWines}
            </Paper>

          </MuiThemeProvider>
        </div>
    );

  }

}

export default connect(state => ( { inventory: state.inventory } ) )( RecentlyAdded );

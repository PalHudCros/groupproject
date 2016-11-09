import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";

import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { getWinesFromInventory } from "../../ducks/inventoryDuck";
import DistributorWineStage from "../../container/DistributorWineStage/DistributorWineStage";
import DistributorTable from "../../container/DistributorTable/DistributorTable.jsx";


export class DistributorContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshButtonState: "ready"
    };
  }

  fetchWinesFromInventory() {
    if ( this.state.refreshButtonState !== "loading" ) {
      this.setState( { refreshButtonState: "loading" } );
      this.props.dispatch( getWinesFromInventory() );
    }
  }

  componentWillReceiveProps(props) {
    if ( props.inventory.status === "Distributor inventory received" || props.inventory.status === "Error" ) {
      this.setState( { refreshButtonState: "ready" } );
    }
  }

  render() {

    return (

      <div className="inventory-content-inner-wrapper admin">
        <DistributorWineStage />
        <div className="searchbar-filters-button-wrapper admin">
          <div className="searchbar-wrapper admin">
            <MuiThemeProvider>
              <SearchBar></SearchBar>
            </MuiThemeProvider>
          </div>
          <div className="refresh-button-wrapper admin">
            <MuiThemeProvider>

              <RefreshIndicator
                onClick={this.fetchWinesFromInventory.bind(this)}
                status={this.state.refreshButtonState}
                left={0}
                top={0}
                size={40}
                percentage={80}
                color="#17d6b2"
                />
            </MuiThemeProvider>
          </div>

        </div>

        <MuiThemeProvider>
          <DistributorTable />
        </MuiThemeProvider>
      </div>

    );
  }

}

export default connect( state => {
  return { tabs: state.tabs, inventory: state.inventory };
} )( DistributorContent );

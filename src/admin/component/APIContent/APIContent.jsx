import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";

import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import ApiWineStage from "../../container/ApiWineStage/ApiWineStage";
import APITable from "../../container/APITable/APITable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {getWinesFromAPI} from "../../ducks/distributionDuck";


export class APIContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshButtonState: "ready"
    };
  }

  render() {

    return (

      <div className="inventory-content-inner-wrapper admin">
        <ApiWineStage />
        <div className="searchbar-filters-button-wrapper admin">
          <div className="searchbar-wrapper admin">
            <MuiThemeProvider>
              <SearchBar></SearchBar>
            </MuiThemeProvider>
          </div>
          <div className="refresh-button-wrapper admin">
            <MuiThemeProvider>

              <RefreshIndicator
                onClick={this.fetchWinesFromAPI.bind(this)}
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
          <APITable />
        </MuiThemeProvider>
      </div>

    );
  }

}

export default connect( state => {
  return { tabs: state.tabs, distribution: state.distribution, inventory: state.inventory };
} )( APIContent );

import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import APITable from "../../container/APITable/APITable.jsx";
import DistributorTable from "../../container/DistributorTable/DistributorTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WineList from '../../container/WineList/WineList';
import ApiWineStage from "../../container/ApiWineStage/ApiWineStage";
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {getWinesFromAPI} from "../../ducks/distributionDuck";

export class InventoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshButtonState: "ready"
    };
  }

  fetchWinesFromAPI() {
    if ( this.state.refreshButtonState !== "loading" ) {
      this.setState( { refreshButtonState: "loading" } );
      this.props.dispatch(getWinesFromAPI());
    }
  }

  componentWillReceiveProps(props) {
    if ( props.distribution.status === "distribution Received!" || props.distribution.status === "Error" ) {
      this.setState( { refreshButtonState: "ready" } );
    }
  }


  render() {

    return (

        <div className="inventory-content-outer-wrapper admin">
        {
         this.props.tabs.whichTab === 1
         ?
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
          :
          this.props.tabs.whichTab === 2
          ?
        <div className="inventory-content-inner-wrapper admin">
          <ApiWineStage />
          <div className="row searchbar-wrapper admin">
            <div className="col-xs-4 admin">
              <MuiThemeProvider>
                <SearchBar></SearchBar>
              </MuiThemeProvider>
            </div>
            <div className="col-xs-offset-4 col-xs-4 admin">
              <MuiThemeProvider>

                <FloatingActionButton style={{margin: 0, height: "20%"}} onClick={this.fetchWinesFromAPI.bind(this)}>
                  <Refresh />
                </FloatingActionButton>
              </MuiThemeProvider>
            </div>

          </div>

            <MuiThemeProvider>
              <DistributorTable />
            </MuiThemeProvider>
        </div>

          :
          this.props.tabs.whichTab === 3
          ?
          <div className="inventory-content-inner-wrapper admin">
            <h2>THREE THREE THREE THREE</h2>
          </div>
          :
          ""
        }
      </div>
    );
  }

}

export default connect( state => {
  return { tabs: state.tabs, distribution: state.distribution };
} )( InventoryContent );

import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import APITable from "../../container/APITable/APITable.jsx";
import DistributorTable from "../../container/DistributorTable/DistributorTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import WineList from '../../container/WineList/WineList';
import ApiWineStage from "../../container/ApiWineStage/ApiWineStage";
import DistributorWineStage from "../../container/DistributorWineStage/DistributorWineStage";
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {getWinesFromAPI} from "../../ducks/distributionDuck";
import {getWinesFromInventory} from "../../ducks/inventoryDuck";

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

  fetchWinesFromInventory() {
    if ( this.state.refreshButtonState !== "loading" ) {
      this.setState( { refreshButtonState: "loading" } );
      this.props.dispatch( getWinesFromInventory() );
    }
  }

  componentWillReceiveProps(props) {
    if ( props.distribution.status === "Distribution Received!" || props.distribution.status === "Error" ) {
      this.setState( { refreshButtonState: "ready" } );
    }
    if ( props.inventory.status === "Distributor Inventory Received!" || props.inventory.status === "Error" ) {
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
  return { tabs: state.tabs, distribution: state.distribution, inventory: state.inventory };
} )( InventoryContent );

import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import APITable from "../../container/APITable/APITable.jsx";
import DistributorTable from "../../container/DistributorTable/DistributorTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WineList from '../../container/WineList/WineList';
import ApiWineStage from "../../container/ApiWineStage/ApiWineStage";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import {getWinesFromAPI} from "../../ducks/distributionDuck";

export class InventoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  fetchWinesFromAPI() {
    this.props.dispatch(getWinesFromAPI());
  }


  render() {

    return (

        <div className="inventory-content-outer-wrapper admin">
        {
         this.props.tabs.whichTab === 1
         ?
        <div className="inventory-content-inner-wrapper admin">
          <ApiWineStage />
          <div className="row searchbar-wrapper admin">
            <div className="col-xs-4 admin">
 {/*             <MuiThemeProvider>
                <SearchBar></SearchBar>
              </MuiThemeProvider> */}
            </div>
            <div className="col-xs-offset-4 col-xs-4 admin">
              <MuiThemeProvider>

                <FloatingActionButton style={{margin: 0}} onClick={this.fetchWinesFromAPI.bind(this)}>
                  <Refresh />
                </FloatingActionButton>
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
{/*              <MuiThemeProvider>
                <SearchBar></SearchBar>
              </MuiThemeProvider> */}
            </div>
            <div className="col-xs-offset-4 col-xs-4 admin">
              <MuiThemeProvider>

                <FloatingActionButton style={{margin: 0}} onClick={this.fetchWinesFromAPI.bind(this)}>
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
  return { tabs: state.tabs };
} )( InventoryContent );

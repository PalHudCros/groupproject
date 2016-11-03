import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import InventoryTable from "../../container/InventoryTable/InventoryTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WineList from '../../container/WineList/WineList';
import CategoryCount from "../../container/CategoryCount/CategoryCount";

export class InventoryContent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {

    return (

        <div className="inventory-content-outer-wrapper admin">
        {
         this.props.tabs.whichTab === 1
         ?
        <div className="inventory-content-inner-wrapper admin">
          <CategoryCount />
          <div className="row searchbar-wrapper admin">
            <div className="col-xs-4 admin">
              <MuiThemeProvider>
                <SearchBar></SearchBar>
              </MuiThemeProvider>
            </div>

          </div>

            <MuiThemeProvider>
              <InventoryTable></InventoryTable>
            </MuiThemeProvider>
        </div>
          :
          this.props.tabs.whichTab === 2
          ?
          <div className="inventory-content-wrapper admin">
            <h2>TWO TWO TWO TWO</h2>
          </div>
          :
          this.props.tabs.whichTab === 3
          ?
          <div className="inventory-content-wrapper admin">
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

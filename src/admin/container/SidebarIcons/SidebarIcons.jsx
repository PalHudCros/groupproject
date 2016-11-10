import React, {Component} from 'react';
import {connect} from "react-redux";
import {setTabTitles} from "../../ducks/tabsDuck.jsx";
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import DashboardIcon from 'material-ui/svg-icons/image/grid-on';
import InventoryIcon from 'material-ui/svg-icons/device/storage';
import DriversIcon from 'material-ui/svg-icons/notification/drive-eta';
import CustomersIcon from 'material-ui/svg-icons/social/people'
import Close from 'material-ui/svg-icons/navigation/close';
import {Link, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class SidebarIcons extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  handleToggle( tabsToLoad, tabRoutes, sectionName ) {
    if ( tabsToLoad ) {
      this.props.dispatch( setTabTitles( tabsToLoad, tabRoutes, sectionName ) );
    }

  }

  render() {

    return (
      <div className="drawer-container admin">

        <Link to="/"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ef4036"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Dashboard"
          onTouchTap={this.handleToggle.bind(this, ["Overview", "Standing Inventory"], ["/", "/"], "Dashboard")}
        >
          <DashboardIcon></DashboardIcon>
        </IconButton></Link>
      <Link to="/inventory/api"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ef4036"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Inventory"
          onTouchTap={this.handleToggle.bind(this, ["Add from API", "Add from Distributor", "In-stock Inventory"], [ "/inventory/api", "/inventory/distributor", "/inventory/instock"], "Inventory")}
        >
          <InventoryIcon></InventoryIcon>
        </IconButton></Link>
      <Link to="/drivers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ef4036"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Drivers"
          onClick={this.handleToggle.bind(this, ["Where Are My Drivers", "Manage Drivers"], ["/drivers", "/drivers"], "Drivers")}
        >
          <DriversIcon></DriversIcon>
        </IconButton></Link>
        <Link to="/customers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ef4036"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Customers"
          onTouchTap={this.handleToggle.bind(this, ["Customer List", "Modify Customer Information"], ["/customers", "/customers"], "Customers")}
        >
          <CustomersIcon></CustomersIcon>
        </IconButton></Link>
      </div>
    );
  }
}

export default connect( state => {
  return { tabs: state.tabs };
} )( SidebarIcons );

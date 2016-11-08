import React, {Component} from 'react';
import {connect} from "react-redux";
import {setTabTitles} from "../../ducks/tabsDuck.jsx";
import Drawer from 'material-ui/Drawer';
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

export class SidebarDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false
    };
  }

  handleToggle( tabsToLoad, tabRoutes, sectionName ) {
    if ( tabsToLoad ) {
      this.props.dispatch( setTabTitles( tabsToLoad, tabRoutes, sectionName ) );
    }
    this.setState({
      openDrawer: !this.state.openDrawer
      , drawerContent: ""
    });
  }

  componentWillReceiveProps( props ) {

    if ( props.tabs.sectionName === "Dashboard" ) {

      this.setState( { drawerContent: (
        <div className="drawer-content admin">
          <MuiThemeProvider>
            <DashboardIcon
              style={{width: 80, height: 80, color: "#ec423d"}}
              ></DashboardIcon>
          </MuiThemeProvider>
          <h1>Dashboard</h1>
        </div>
      ) } );
    }
    else if ( props.tabs.sectionName === "Inventory" ) {

      this.setState( { drawerContent: (
        <div className="drawer-content admin">
          <MuiThemeProvider>
            <InventoryIcon
              style={{width: 80, height: 80, color: "#ec423d"}}
              ></InventoryIcon>
          </MuiThemeProvider>
          <h1>Inventory</h1>
        </div>
      ) } );
    }
    else if ( props.tabs.sectionName === "Drivers" ) {

      this.setState( { drawerContent: (
        <div className="drawer-content admin">
          <MuiThemeProvider>
            <DriversIcon
              style={{width: 80, height: 80, color: "#ec423d"}}
              ></DriversIcon>
          </MuiThemeProvider>
          <h1>Drivers</h1>
        </div>
      ) } );
    }
    else if ( props.tabs.sectionName === "Customers" ) {

      this.setState( { drawerContent: (
        <div className="drawer-content admin">
          <MuiThemeProvider>
            <CustomersIcon
              style={{width: 80, height: 80, color: "#ec423d"}}
              ></CustomersIcon>
          </MuiThemeProvider>
          <h1>Customers</h1>
        </div>
      ) } );
    }

  }

  render() {
    return (
      <div className="drawer-container admin">

        <Link to="/"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Dashboard"
          onTouchTap={this.handleToggle.bind(this, ["Tab 1", "Tab 2"], ["/", "/"], "Dashboard")}
        >
          <DashboardIcon></DashboardIcon>
        </IconButton></Link>
      <Link to="/inventory/api"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Inventory"
          onTouchTap={this.handleToggle.bind(this, ["Add from API", "Add from Distributor", "In-stock Inventory"], ["/inventory/api", "/inventory/distributor", "/inventory/instock"], "Inventory")}
        >
          <InventoryIcon></InventoryIcon>
        </IconButton></Link>
      <Link to="/drivers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Drivers"
          onClick={this.handleToggle.bind(this, ["Tab 1", "TABBY", "Tab 2"], [ "/drivers", "/drivers", "/drivers" ], "Drivers")}
        >
          <DriversIcon></DriversIcon>
        </IconButton></Link>
        <Link to="/customers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Customers"
          onTouchTap={this.handleToggle.bind(this, ["Tab 1", "Tab 2"], ["/customers","/customers"], "Customers")}
        >
          <CustomersIcon></CustomersIcon>
        </IconButton></Link>

      <Drawer
        containerClassName="drawer admin"
        open={this.state.openDrawer}
        >
          <div className="flex-end admin">

            <IconButton
              onTouchTap={this.handleToggle.bind(this, null)}
              >
              <Close></Close>
            </IconButton>
          </div>

          { this.state.drawerContent }

        </Drawer>
      </div>
    );
  }
}

export default connect( state => {
  return { tabs: state.tabs };
} )( SidebarDrawer );

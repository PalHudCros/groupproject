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
import {Link} from 'react-router';

export class SidebarDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false
    };
  }

  handleToggle( tabsToLoad ) {
    if ( tabsToLoad ) {
      this.props.dispatch( setTabTitles( tabsToLoad ) );
    }
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  }

  render() {
    return (
      <div className="drawer-container admin">

        <Link to="/"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Dashboard"
          onTouchTap={this.handleToggle.bind(this, ["Tab 1", "Tab 2"])}
        >
          <DashboardIcon></DashboardIcon>
        </IconButton></Link>
        <Link to="/inventory"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Inventory"
          onTouchTap={this.handleToggle.bind(this, ["Add from API", "Add from Distributor", "In-stock Inventory"])}
        >
          <InventoryIcon></InventoryIcon>
        </IconButton></Link>
      <Link to="/drivers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Drivers"
          onClick={this.handleToggle.bind(this, ["Tab 1", "TABBY", "Tab 2"])}
        >
          <DriversIcon></DriversIcon>
        </IconButton></Link>
        <Link to="/customers"><IconButton
          iconStyle={{width: 60, height: 60, color: "#ec423d"}}
          style={{width: 120, height: 120, padding: 30}}
          label="Customers"
          onTouchTap={this.handleToggle.bind(this, ["Tab 1", "Tab 2"])}
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
          <MenuItem>All Drivers</MenuItem>
          <MenuItem>One Driver</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default connect( state => {
  return { tabs: state.tabs };
} )( SidebarDrawer );

import './SidebarDrawer.scss';

import React, {Component} from 'react';
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

export default class DrawerSimpleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggle() {
    console.log( this.state.open );
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="drawer-container sidebardrawer">

        <IconButton
          iconStyle={{width: 60, height: 60}}
          style={{width: 120, height: 120, padding: 30}}
          label="Dashboard"
          tooltip="Dashboard"
          tooltipPosition="bottom-right"
          onClick={this.handleToggle.bind(this)}
        >
          <DashboardIcon></DashboardIcon>
        </IconButton>
        <IconButton
          iconStyle={{width: 60, height: 60}}
          style={{width: 120, height: 120, padding: 30}}
          label="Inventory"
          tooltip="Manage Inventory"
          tooltipPosition="bottom-right"
          onClick={this.handleToggle.bind(this)}
        >
          <InventoryIcon></InventoryIcon>
        </IconButton>
        <IconButton
          iconStyle={{width: 60, height: 60}}
          style={{width: 120, height: 120, padding: 30}}
          label="Drivers"
          tooltip="Manage Drivers"
          tooltipPosition="bottom-right"
          onClick={this.handleToggle.bind(this)}
        >
          <DriversIcon></DriversIcon>
        </IconButton>
        <IconButton
          iconStyle={{width: 60, height: 60}}
          style={{width: 120, height: 120, padding: 30}}
          label="Customers"
          tooltip="Manage Customers"
          tooltipPosition="bottom-right"
          onClick={this.handleToggle.bind(this)}
        >
          <CustomersIcon></CustomersIcon>
        </IconButton>

      <Drawer
        className="hello"
        containerClassName="drawer sidebardrawer"
        open={this.state.open}
        >
          <div className="flex-end sidebardrawer">

            <IconButton
              onClick={this.handleToggle.bind(this)}
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

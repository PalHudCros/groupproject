import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton'

import {getDrivers} from '../../ducks/driverDuck'

export class DriverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        drivers: []
    };
  }

  componentWillMount() {
      this.props.dispatch(getDrivers());
  }

  viewDriver(driverId) {

  }

  createDriver(driver) {

  }

  deleteDriver(driverId) {

  }

  componentWillReceiveProps(props) {
      const drivers = props.drivers.driverList.map(driver => (
            <MuiThemeProvider key={driver.sub}>
                <Chip
                    onTouchTap={this.viewDriver.bind(this, driver.sub)}
                    >
                    <Avatar src={driver.picture} />
                    {driver.name}
                </Chip>
            </MuiThemeProvider>
      ))
      this.setState({drivers: drivers})
  }

  render() {
    return (
        <div>
            <h2>All Drivers</h2>
            {this.state.drivers}
            <MuiThemeProvider>
                <RaisedButton label="Add Driver" primary={true} onTouchTap={this.createDriver.bind(this)}/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver.bind(this)}/>
            </MuiThemeProvider>
        </div>
    );
  }
};

export default connect(state => ({drivers: state.drivers}))(DriverList);

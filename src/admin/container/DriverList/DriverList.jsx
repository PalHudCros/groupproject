import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import io from 'socket.io-client';
import fs from 'fs';

import "./DriverList.scss"

import {getDrivers, updateDrivers, createDriver} from '../../ducks/driverDuck'

export class DriverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allDrivers: []
        , enRouteDrivers: []
        , openCreateDialog: false
        , openDeleteDialog: false
        , viewDriverDialog: false
        , viewedDriver: {}
        , email: ""
        , password: ""
    };
  }

  componentWillMount() {
    this.props.dispatch(getDrivers());
    const socket = io.connect("/");
    socket.on("driverPosition", driver => {
        this.props.dispatch(updateDrivers(driver));
    })

  }

  viewDriver(driverId) {
      let driver = {};
      for (let i = 0; i < this.props.drivers.driverList.length; i++) {
          if (this.props.drivers.driverList[i].sub === driverId) driver = this.props.drivers.driverList[i];
      }
      console.log(driver);
      this.setState({viewedDriver: driver, viewDriverDialog: true});
  }

  addDriver() {
      let driver = {
          name: this.state.name
          , email: this.state.email
          , password: this.state.password
          , car: this.state.car
          , licensePlate: this.state.licensePlate
      }
      this.props.dispatch(createDriver(driver))
      this.setState({
          name: "", email: "", password: "", car: "", licensePlate: "" 
          , openCreateDialog: false
        })
  }

  deleteDriver(driverId) {     
    }

  componentWillReceiveProps(props) {
      const drivers = props.drivers.driverList.map(driver => (
            <MuiThemeProvider key={driver._id}>
                <Chip
                    onTouchTap={this.viewDriver.bind(this, driver.sub)}
                    >
                    <Avatar src={driver.picture} />
                    {driver.name}
                </Chip>
            </MuiThemeProvider>
      ))
      const enRouteDrivers = props.drivers.enRouteList.map(driver => (
            <MuiThemeProvider key={driver._id}>
                <Chip
                    onTouchTap={this.viewDriver.bind(this, driver.sub)}
                    >
                    <Avatar src={driver.picture} />
                    {driver.name}
                </Chip>
            </MuiThemeProvider>
      ))
      this.setState({allDrivers: drivers, enRouteDrivers: enRouteDrivers})
  }

  render() {
    function Button(props) {
        return (
            <MuiThemeProvider>
                <RaisedButton
                    label={props.label}
                    primary={props.primary}
                    secondary={props.secondary}
                    onTouchTap={props.handler}
                />
            </MuiThemeProvider>
        )
    }
      
    return (
        <div>
            <div className="row">
                <div className="col-xs-6">
                    <h2>All Drivers</h2>
                    {this.state.allDrivers}
                </div>
                <div className="col-xs-6">
                    <h2>EnRoute Drivers</h2>
                    {this.state.enRouteDrivers}
                </div>
            </div>
            <div className="row">
                <div className="button-row col-xs-6 col-xs-offset-3">
                    <MuiThemeProvider>
                        <RaisedButton className="driver-button" label="Add Driver" primary={true} onTouchTap={() => this.setState({openCreateDialog: true})}/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <RaisedButton className="driver-button" label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver}/>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <Dialog
                            title="Create Driver"
                            modal={false}
                            open={this.state.openCreateDialog}
                            onRequestClose={() => {this.setState({openCreateDialog: false})}}
                        >
                            <TextField
                                floatingLabelText="Name"
                                value={this.state.name}
                                onChange={(e) => {this.setState({name: e.target.value})}}
                                type="text"
                                /><br />
                            <TextField
                                floatingLabelText="Email"
                                value={this.state.email}
                                onChange={(e) => {this.setState({email: e.target.value})}}
                                type="email"
                                /><br />
                            <TextField
                                floatingLabelText="Password"
                                value={this.state.password}
                                onChange={(e) => {this.setState({password: e.target.value})}}
                                type="password"
                                /><br />
                            <TextField
                                floatingLabelText="Car Make and Model"
                                value={this.state.car}
                                onChange={(e) => {this.setState({car: e.target.value})}}
                                type="text"
                                /><br />
                            <TextField
                                floatingLabelText="License Plate"
                                value={this.state.licensePlate}
                                onChange={(e) => {this.setState({licensePlate: e.target.value})}}
                                type="text"
                                /><br />
                            <Button
                                label={"Cancel"}
                                primary={false}
                                secondary={true}
                                handler={() => {this.setState({openCreateDialog: false})}}                        
                            />
                            <Button
                                label={"Submit"}
                                primary={true}
                                secondary={false}
                                handler={this.addDriver.bind(this)}                        
                            />
                        </Dialog>
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <Dialog
                            title={this.state.viewedDriver.name}
                            modal={false}
                            open={this.state.viewDriverDialog}
                            onRequestClose={() => this.setState({viewedDriver: {}, viewDriverDialog: false})}
                        >
                            <Avatar src={this.state.viewedDriver.picture} />
                            <p>{this.state.viewedDriver.address}</p>
                            <p>{this.state.viewedDriver.vehicle}</p>
                            <p>{this.state.viewedDriver.licensePlate}</p>
                        </Dialog>
                    </MuiThemeProvider>
                </div>
            </div>
        
        </div>
    );
  }
};

export default connect(state => ({drivers: state.drivers}))(DriverList);

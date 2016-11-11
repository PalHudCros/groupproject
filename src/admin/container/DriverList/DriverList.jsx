import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import {getDrivers, createDriver} from '../../ducks/driverDuck'

export class DriverList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        drivers: []
        , openCreateDialog: false
        , openDeleteDialog: false
        , email: ""
        , password: ""
    };
  }

  componentWillMount() {
      this.props.dispatch(getDrivers());
  }

  viewDriver(driverId) {

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
      console.log(props.drivers.driverList);
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
      this.setState({drivers: drivers})
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
            <h2>All Drivers</h2>
            {this.state.drivers}
            <MuiThemeProvider>
                <RaisedButton label="Add Driver" primary={true} onTouchTap={() => this.setState({openCreateDialog: true})}/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver}/>
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
        </div>
    );
  }
};

export default connect(state => ({drivers: state.drivers}))(DriverList);

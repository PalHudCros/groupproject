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
          email: this.state.email
          , password: this.state.password
      }
      this.props.dispatch(createDriver(driver))
      this.setState({
          firstName: "", lastName: "", nickname: "", email: "", password: ""
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
<<<<<<< HEAD
                <RaisedButton label="Add Driver" primary={true} onTouchTap={() => {this.setState({openCreateDialog: true})}}/>
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
                    <Button
                        label={"Cancel"}
                        primary={true}
                        secondary={false}
                        handler={() => {this.setState({openCreateDialog: false})}}                        
                    />
                    <Button
                        label={"Submit"}
                        primary={false}
                        secondary={true}
                        handler={this.addDriver.bind(this)}                        
                    />
                </Dialog>
=======
                <RaisedButton label="Add Driver" primary={true} onTouchTap={this.createDriver.bind(this)}/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <RaisedButton label="Delete Driver" secondary={true} onTouchTap={this.deleteDriver.bind(this)}/>
>>>>>>> f01364da9264f82e6fa8e1546a567b139091826b
            </MuiThemeProvider>
        </div>
    );
  }
};

export default connect(state => ({drivers: state.drivers}))(DriverList);

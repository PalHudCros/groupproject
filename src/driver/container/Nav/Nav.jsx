import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Userbar from '../Userbar/Userbar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {getDriverToken, isTokenExpired} from "../../../utils/jwtHelper";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  handleTouchTap() {

  }

  render() {

    return (
      <MuiThemeProvider>
        <AppBar
          className="app-bar driver"
          title={<Link to="/"><h1>Fero Vino</h1></Link>}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={<IconMenu
            style={{ backgroundColor: "#f2f5f7" }}
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <Link to="/"><MenuItem primaryText="Home" /></Link>
            <Link to="/map"><MenuItem primaryText="Map" /></Link>

          </IconMenu>}
          iconElementRight={<Userbar/>}
        />
      </MuiThemeProvider>

    );
  }

}
export default connect(state => ( { user: state.user } ) )( Nav );

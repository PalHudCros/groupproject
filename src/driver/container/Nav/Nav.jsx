import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {getToken, isTokenExpired} from "../../../utils/jwtHelper";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <nav className="col-xs-12 nav-wrapper driver">

          <h1>The Nav Thingy!</h1>
      </nav>
    );
  }

}
export default connect(state => ( { user: state.user } ) )( Nav );

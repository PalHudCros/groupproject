//Components
import React, {Component} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import Nav from '../../container/Nav/Nav.jsx';
import { login, doAuthentication, logout, hideLock } from "../../ducks/userDuck";
import { isTokenExpired } from "../../../utils/jwtHelper.js"

class Userbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

 componentWillMount() {
    this.props.dispatch(doAuthentication());
    const token = localStorage.getItem('driver_id_token');
    if (!token || isTokenExpired(token)) {
      this.props.dispatch(login());
    }
  }

  componentWillReceiveProps(props) {

  }
  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {

    return (
      <div className="userbar-wrapper driver">
        <a onClick={this.handleLogout.bind(this)}>
            <span className="UserIcon">
            {
              this.props.user.picture
              ?
              <Avatar src={this.props.user.picture} size={20} />
              :
              <AccountCircle></AccountCircle>
            }
              <span className="signIn">Sign Out</span>
            </span>
         </a>
      </div>
    );

  }

}
export default connect(state => ( { user: state.user } ) )( Userbar );

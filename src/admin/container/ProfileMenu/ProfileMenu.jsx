import React, {Component} from 'react';
import {connect} from "react-redux";

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Hamburger from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/svg-icons/action/face';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import { login, doAuthentication, getExistingUser, logout, hideLock } from "../../ducks/userDuck";
import { isTokenExpired } from "../../../utils/jwtHelper.js"


class ProfileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

   componentWillMount() {
    this.props.dispatch(doAuthentication());
    const token = localStorage.getItem('admin_id_token');
    const profile = localStorage.getItem('admin_profile');
    let expired;
    // if (token) expired = isTokenExpired(token)
    if (!token || expired) {
      this.props.dispatch(login());
    } else {
      this.props.dispatch(getExistingUser(token, profile));
    }

  }

  render() {

    return (
      <div className="profilemenu-wrapper admin">
        <div className="hamburger-menu-wrapper admin">

      <IconMenu
        menuStyle={{background: "linear-gradient(to right, rgba( 242, 245, 247, 1), rgba( 235, 227, 225, 1))"}}
        iconButtonElement={<IconButton
          iconStyle={{width: 60, height: 60, color: "#727786"}}
          style={{width: 120, height: 120, padding: 0}}
                          >
          <Hamburger /><Avatar src={this.props.user.picture}/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
        <MenuItem primaryText="Settings" />
        <Divider />
        <MenuItem primaryText="Back to Store Front" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    </div>
    </div>

    );
  }

}
export default connect(state => ( { user: state.user } ) )( ProfileMenu );

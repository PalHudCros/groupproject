import React, { Component } from 'react'
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { login, doAuthentication, getExistingUser, logout } from "../../ducks/userDuck";
import {deleteCartSession} from '../../ducks/cartDuck'
// import store from "../../store";

class UserIcon extends Component{
  constructor(props){
    super(props);
    this.props.dispatch(doAuthentication());
  }
  componentWillMount() {
    let token = localStorage.getItem('id_token');
    let profile = localStorage.getItem('profile');
    if (token) {
      this.props.dispatch(getExistingUser(token, profile));
    }
  }

  handleAuthClick() {
    if (localStorage.getItem('id_token')) {
      this.props.dispatch(logout());
      this.props.dispatch(deleteCartSession());
    } else {
    this.props.dispatch(login());
    }
  }

  render(){
    return(
      <a onClick={this.handleAuthClick.bind(this)}>
        <span
          className="UserIcon shop"
        >
        {
          this.props.user.picture
          ?
          <Avatar src={this.props.user.picture} size={20} />
          :
          <AccountCircle
            style={{width: 20, height: 20, color: "#7b7b7d"}}
            ></AccountCircle>
        }
          <span className="signIn shop">
          {
            this.props.user.sub
             ?
            "Sign Out"
            :
            "Sign In"
          }
          </span>
        </span>
      </a>

    )
  }
}
export default connect(state => ( { user: state.user } ) )( UserIcon );

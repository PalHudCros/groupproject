import React, { Component } from 'react'
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { login, doAuthentication, logout } from "../../ducks/userDuck";
// import store from "../../store";

class UserIcon extends Component{
  constructor(props){
    super(props);
    this.props.dispatch(doAuthentication());
  }
  componentWillMount() {
  }

  componentWillReceiveProps(props){
  }

  handleAuthClick() {
    if (this.props.user.user_id) {
      this.props.dispatch(logout());
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
          <AccountCircle></AccountCircle>
        }
          <span className="signIn shop">
          {
            this.props.user.user_id
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

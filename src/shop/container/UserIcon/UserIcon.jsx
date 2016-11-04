import React, { Component } from 'react'
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { login, authenticating } from "../../ducks/userDuck";
// import store from "../../store";

class UserIcon extends Component{
  constructor(){
    super();

  }
  componentWillMount() {
    
  }

  componentWillReceiveProps(props){

  }

  handleAuthClick() {
    this.props.dispatch(authenticating());
  }

  render(){
    return(
      <a onClick={this.handleAuthClick.bind(this)} href="/auth/facebook">
        <span
          className="UserIcon shop"
        >
        {
          this.props.user.photo
          ?
          <Avatar src={this.props.user.photo} size={25} />
          :
          <AccountCircle></AccountCircle>
        }
          <span className="signIn shop">
          {
            this.props.user.loggedIn
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

import "./UserIcon.scss";

import React, { Component } from 'react'
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';


export default class UserIcon extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <span className="UserIcon">
        <AccountCircle></AccountCircle>
        <span className="signIn">Sign In</span>
      </span>
    )
  }
}

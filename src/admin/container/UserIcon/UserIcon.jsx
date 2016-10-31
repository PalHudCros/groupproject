import "./UserIcon.scss";

import React, { Component } from 'react'
import { Link } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';

import { getUser, login } from "../../../services/userService";

class UserIcon extends Component{
  constructor(){
    super();
    this.state = {
      status:'Sign in'
    }
  }
  componentWillMount() {
    getUser()
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentWillReceiveProps(props){
    console.log(props)
    if (props.user.loggedIn) {
      this.setState({status: 'Sign out'})
    }
  }

  // login() {
  //     console.log("Login fired");
  //     login().then(results=>{
  //     console.log(results)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  render(){
    return(
      <a href="/auth/facebook">
        <span 
          className="UserIcon"
        
        
        >
          <AccountCircle></AccountCircle>
          <span className="signIn">{this.state.status}</span>
        </span>
      </a>

    )
  }
}
export default connect(state => ( { user: state.user } ) )( UserIcon );
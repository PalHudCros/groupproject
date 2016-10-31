import "./UserIcon.scss";

import React, { Component } from 'react'
import { Link } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { getUser, login } from "../../../services/userService";

class UserIcon extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false
      , photo: ""
      , _id: ""
      , name: ""
    }
  }
  componentWillMount() {
    if (!this.state.loggedIn) {
      getUser()
        .then(result => {          
          if (result._id) {
              console.log(result);
              this.setState({loggedIn: true, photo: result.photo, _id: result._id, name: result.name}); 
          }
        })
        .catch(err => {
          console.log("Error", err);
        });     
    }
  }

  componentWillReceiveProps(props){
    console.log(props)
  }

  render(){
    return(
      <a href="/auth/facebook">
        <span 
          className="UserIcon"
        
        
        >
        {
          this.state.photo
          ?
          <Avatar src={this.state.photo} size={25} />
          :
          <AccountCircle></AccountCircle>
        }
          <span className="signIn">
          {
            this.state.loggedIn
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
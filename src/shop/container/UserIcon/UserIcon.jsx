import "./UserIcon.scss";

import React, { Component } from 'react'
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';

import { getUser } from "../../services/userService";
import { login, authenticating } from "../../ducks/userDuck";
// import store from "../../store";

class UserIcon extends Component{
  constructor(){
    super();

  }
  componentWillMount() {
    new Promise((resolve, reject) => {
      getUser(resolve, reject);
    })
      .then(result => this.props.dispatch(login(result.data)));
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
          className="UserIcon"
        >
        {
          this.props.user.photo
          ?
          <Avatar src={this.props.user.photo} size={25} />
          :
          <AccountCircle></AccountCircle>
        }
          <span className="signIn">
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

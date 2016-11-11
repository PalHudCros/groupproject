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

  componentDidMount() {
    console.log( this.props.user.ofAge );
    let token = localStorage.getItem('id_token');
    if (token || this.props.user.ofAge === true) {
      let profile = localStorage.getItem('profile');
      this.props.dispatch(getExistingUser(token, profile));
    } else {
      setTimeout( () => {
        $(".shop-wrapper.shop").addClass("blur");
      }, 1 );
      $(".age-verification-wrapper.shop").css("display", "block");
      setTimeout( () => {
        $(".age-verification-wrapper.shop").css("opacity", "1");
      }, 1 );
    }
  }

  componentWillReceiveProps(props){
    console.log( props );
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
          localStorage.getItem('id_token')
          ?
          <Avatar src={this.props.user.picture} size={20} />
          :
          <AccountCircle></AccountCircle>
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

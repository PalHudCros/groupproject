import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import { login, doAuthentication, logout } from "../../ducks/userDuck";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentWillMount() {
    this.props.dispatch(doAuthentication());
  }

  handleAuthClick() {
    if (this.props.user.sub) {
      this.props.dispatch(logout());
    } else {
    this.props.dispatch(login());
    }
  }

  render() {

    return (
      <nav className="col-xs-12 nav-wrapper driver">

          <h1>The Nav Thingy!</h1>
          <a onClick={this.handleAuthClick.bind(this)}>
            <span className="UserIcon">
            {
              this.props.user.picture
              ?
              <Avatar src={this.props.user.picture} size={20} />
              :
              <AccountCircle></AccountCircle>
            }
              <span className="signIn">
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



      </nav>
    );
  }

}
export default connect(state => ( { user: state.user } ) )( Nav );

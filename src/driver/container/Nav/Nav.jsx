import React, {Component} from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <nav className="col-xs-12 nav-wrapper driver">

          <h1>The Nav Thingy!</h1>

      </nav>
    );
  }

}

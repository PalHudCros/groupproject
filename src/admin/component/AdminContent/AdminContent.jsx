import './AdminContent.scss';

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function AdminContent(props) {

  return (
      <nav className="col-xs-11 content admincontent">
        <MuiThemeProvider>
          <h1>Content</h1>
        </MuiThemeProvider>

      </nav>
  );

}

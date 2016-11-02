import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function AdminContent(props) {

  return (
      <nav className="col-xs-12 customerscontent admin">
        <MuiThemeProvider>
          <h1>Customers Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}
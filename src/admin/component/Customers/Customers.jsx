import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function CustomersContent(props) {

  return (
      <nav className="row customerscontent admin">
        <MuiThemeProvider>
          <h1>Customers Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function DriversContent(props) {

  return (
      <nav className="row driverscontent admin">
        <MuiThemeProvider>
          <h1>Drivers Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}

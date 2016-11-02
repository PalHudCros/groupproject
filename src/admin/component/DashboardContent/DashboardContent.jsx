//Admin

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function DashboardContent(props) {

  return (
      <nav className="col-xs-12 dashboardcontent admin">
        <MuiThemeProvider>
          <h1>Admin Dashboard Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function MapContent(props) {

  return (
      <nav className="col-xs-12 orderscontent driver">
        <MuiThemeProvider>
          <h1>OrdersContent Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}

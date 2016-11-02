import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function MapContent(props) {

  return (
      <nav className="col-xs-12 queuecontent driver">
        <MuiThemeProvider>
          <h1>QueueContent Route</h1>
        </MuiThemeProvider>

      </nav>
  );

}

import './Sidebar.scss';

import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Sidebar( props ) {

  return (
    <div className="container-fluid sidebar">
      <nav className="row side-nav sidebar">
        <MuiThemeProvider>
          <h1>Side</h1>
        </MuiThemeProvider>

      </nav>

    </div>
  );
}

import './AdminContent.scss';

import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function AdminContent(props) {

  return (
    <div className="container-fluid admincontent">
      <nav className="row admincontent">
        <MuiThemeProvider>
          <h1>Content</h1>
        </MuiThemeProvider>

      </nav>

    </div>
  );

}

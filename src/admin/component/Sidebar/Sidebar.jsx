import './Sidebar.scss';

import React from 'react';
import {Link} from 'react-router';
import SidebarDrawer from '../../container/SidebarDrawer/SidebarDrawer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Sidebar( props ) {

  return (
      <nav className="col-xs-1 side-nav sidebar">
        <MuiThemeProvider>
          <SidebarDrawer></SidebarDrawer>
        </MuiThemeProvider>
      </nav>
  );
}

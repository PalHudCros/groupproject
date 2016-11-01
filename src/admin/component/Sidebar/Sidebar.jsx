import React from 'react';
import {Link} from 'react-router';
import ProfileMenu from '../../container/ProfileMenu/ProfileMenu.jsx';
import SidebarDrawer from '../../container/SidebarDrawer/SidebarDrawer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Sidebar( props ) {

  return (
      <nav className="side-nav sidebar">
        <MuiThemeProvider>
          <ProfileMenu></ProfileMenu>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SidebarDrawer></SidebarDrawer>
        </MuiThemeProvider>
      </nav>
  );
}

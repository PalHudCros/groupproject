import React from 'react';
import {Link} from 'react-router';
import ProfileMenu from '../../container/ProfileMenu/ProfileMenu.jsx';
import SidebarIcons from '../../container/SidebarIcons/SidebarIcons.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Sidebar( props ) {

  return (
      <nav className="side-nav admin">
        <div className="logo admin">
          <h1>Fero Vino</h1>
        </div>
        <MuiThemeProvider>
          <ProfileMenu></ProfileMenu>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SidebarIcons></SidebarIcons>
        </MuiThemeProvider>
      </nav>
  );
}

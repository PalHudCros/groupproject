//Driver

//Components
import React from "react";
import Userbar from '../../container/Userbar/Userbar.jsx';
import Nav from '../../container/Nav/Nav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar() {
  return (
      <MuiThemeProvider>
        <Nav></Nav>
      </MuiThemeProvider>
  );
}

//Driver

//Components
import React from "react";
import Userbar from '../../container/Userbar/Userbar.jsx';
import Nav from '../../container/Nav/Nav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar() {
  return (
    <div className="navbar-wrapper driver">

          <MuiThemeProvider>
            <Userbar></Userbar>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
          
    </div>
  );
}

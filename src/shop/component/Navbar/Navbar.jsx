//Components
import React from "react";
import Nav from '../Nav/Nav.jsx';
import SuperNav from '../SuperNav/SuperNav.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="navbar-wrapper shop">
        <nav className="supernav-wrapper shop">
          <MuiThemeProvider>
            <SuperNav></SuperNav>
          </MuiThemeProvider>
        </nav>
        <nav className="nav-wrapper shop">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
        </nav>
    </div>
  );
}

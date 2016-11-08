//Components
import React from "react";
import Nav from '../Nav/Nav.jsx';
import SuperNav from '../SuperNav/SuperNav.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="container-fluid shop">
        <nav className="row supernav shop">
          <MuiThemeProvider>
            <SuperNav></SuperNav>
          </MuiThemeProvider>
        </nav>
        <nav className="row nav shop">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
        </nav>
    </div>
  );
}

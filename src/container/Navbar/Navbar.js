import React from "react";
import Nav from '../Nav/Nav.js';
// import SuperNav from './SuperNav/SuperNav.js'
import "./Navbar.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="container-fluid">
        <nav className="row">
          {/*<SuperNav></SuperNav>*/}
          this is a test!
        </nav>
        <nav className="row">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
        </nav>
    </div>

  );
}

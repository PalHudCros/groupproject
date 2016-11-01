//Components
import React from "react";
import Nav from '../../container/Nav/Nav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="row navbar-wrapper admin">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
    </div>
  );
}

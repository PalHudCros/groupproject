//styles
import "./Navbar.scss";

//Components
import React from "react";
import Nav from '../Nav/Nav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="row navbar">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
    </div>
  );
}

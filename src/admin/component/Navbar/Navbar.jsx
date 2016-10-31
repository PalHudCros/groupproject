//styles
import "./Navbar.scss";

//Components
import React from "react";
import Nav from '../Nav/Nav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Navbar(){
  return (
    <div className="container-fluid">
        <nav className="row Nav">
          <MuiThemeProvider>
            <Nav></Nav>
          </MuiThemeProvider>
        </nav>
    </div>
  );
}

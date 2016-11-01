import React, {Component} from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Link } from "react-router";

export default function Admin(props) {

  return (
      <div>

        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <div className="container-fluid admin">


          <div className="row admin">



            {props.children}

          </div>

        </div>

      </div>
    );
}

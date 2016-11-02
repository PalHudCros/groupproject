//Admin

import React, {Component} from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Link } from "react-router";

export default function Dashboard(props) {

  return (
      <div>

        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <div className="container-fluid admin">

            {props.children}

        </div>

      </div>
    );
}

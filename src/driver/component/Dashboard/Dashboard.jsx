import React, {Component} from "react";
import { Link } from "react-router";

import Navbar from '../Navbar/Navbar.jsx';

export default function Dashboard(props) {
  
  return (
      <div>

        <Navbar></Navbar>

        <div className="container-fluid driver">

          <div className="row driver">

            {props.children}

          </div>

        </div>

      </div>
    );
}

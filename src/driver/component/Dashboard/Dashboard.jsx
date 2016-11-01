import React, {Component} from "react";
import { Link } from "react-router";

import Navbar from '../Navbar/Navbar.jsx';

export default function Admin(props) {

  return (
      <div>

        <div className="container-fluid driver">

          <Navbar></Navbar>


          <div className="row driver">



            {props.children}

          </div>

        </div>

      </div>
    );
}

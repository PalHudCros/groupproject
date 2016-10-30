import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import { Link } from "react-router";

export default function Shop(props) {
  
  return (
      <div>
        <Navbar></Navbar>
        {props.children}
      </div>
  )
}
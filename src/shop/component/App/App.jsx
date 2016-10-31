import React from "react";
import Navbar from "../Navbar/Navbar"

export default function App(props){
  return(
    <div>
      <Navbar></Navbar>
      {props.children}
    </div>
  )
}

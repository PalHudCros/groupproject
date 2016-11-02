import React from "react";
import Navbar from "../Navbar/Navbar"

export default function App(props){
  return(
    <div className='conatiner-fluid'>
      <Navbar></Navbar>
      {props.children}
      <footer style={{marginTop:20,backgroundColor:'#e8e8e8'}}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </footer>
    </div>
  )
}

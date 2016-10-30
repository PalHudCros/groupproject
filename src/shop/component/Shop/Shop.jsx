import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import { Link } from "react-router";

export default class App extends React.Component{
  constructor(props){
    super(props)
    console.log("props",props)
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }
  render(){

    return(
      <div>
        <Navbar></Navbar>
      </div>
    )
  }
}

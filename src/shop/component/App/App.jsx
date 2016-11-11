//Modules
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { connect } from 'react-redux';

//Async Actions
import {getWines} from "../../ducks/wineDuck";

class App extends Component{
  constructor(props){
    super(props)

    this.state ={
      wines: []
    }
  }

  componentWillMount(){
    this.props.dispatch( getWines() );
  }

  render(){
    return(
      <div className='container-fluid shop'>
        <Navbar></Navbar>
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

export default connect(state => ({wines: state.wines}))(App)

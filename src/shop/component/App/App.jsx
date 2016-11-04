//Modules
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar"
import { connect } from 'react-redux'

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

    this.props.dispatch(getWines())
  }

  render(){
    return(
      <div className='conatiner-fluid shop'>
        <Navbar></Navbar>
        {this.props.children}
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
}

export default connect(state => ({wines: state.wines}))(App)

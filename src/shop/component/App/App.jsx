//Modules
import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import AgeVerification from "../../container/AgeVerification/AgeVerification";
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

    this.props.dispatch(getWines())
  }

  render(){
    return(
      <div className="shop-container shop">
        <AgeVerification></AgeVerification>
        <div className='shop-wrapper shop'>
          <Navbar></Navbar>
          {this.props.children}
          <footer className="footer shop">
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
      </div>
    )
  }
}

export default connect(state => ({wines: state.wines}))(App)

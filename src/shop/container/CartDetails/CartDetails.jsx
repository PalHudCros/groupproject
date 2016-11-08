import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getCart} from '../../ducks/cartDuck.js';

class CartDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: {
        cart:[],
        runningTotal:0
      }
    }
    // this.props.dispatch(getCart())
  }

  componentWillReceiveProps(props){
    this.setState({
      cart:props.cart
    })
  }

  render(){
    return(
      <div>CartDetails</div>
    )
  }
}

export default connect( state => ({ cart:state.cart}) )(CartDetails)

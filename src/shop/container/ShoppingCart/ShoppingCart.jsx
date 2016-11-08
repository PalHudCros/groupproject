import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCart } from '../../ducks/cartDuck.js'

class ShoppingCart extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
  }

  componentWillMount(){
    this.props.dispatch(getCart())
  }

  componentWillReceiveProps(props){
    this.setState(
      {cart:props.cart}
    )
  }

  render(){
    return(
      <div>ShoppingCart</div>
    )
  }
}

export default connect( state => ({ cart:state.cart }) )(ShoppingCart)

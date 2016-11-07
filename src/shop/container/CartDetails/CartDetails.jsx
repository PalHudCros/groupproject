import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
  }

  componentWillReceiveProps(props){
    thist.setState(
      {cart:props.cart}
    )
  }

  render(){
    return(
      <div>CartDetails</div>
    )
  }
}

export default connect( state => ({ cart:state.cart}) )(CartDetails)

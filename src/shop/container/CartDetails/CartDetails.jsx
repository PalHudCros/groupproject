import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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

  }

  componentWillReceiveProps(props){
    this.setState({
      cart:props.cart
    }, ()=>{console.log(this.state.cart);})

  }

  render(){
    let cartQuantity = this.state.cart.cart.reduce( (prev, curr, ind) => {
      return prev + curr.quantity
    }, 0)
    let runningTotal = Math.round(this.state.cart.runningTotal*100)/100;
    let cartTip = Math.round((runningTotal * .10897994769)*100)/100;
    let deliveryFee = 5
    let cartTax = Math.round(((runningTotal + deliveryFee) * .0875)*100)/100;
    let cartTotal = Math.round((runningTotal + cartTip + deliveryFee + cartTax)*100)/100;
    console.log('cartQuantity', cartQuantity);
    return(
      <div>
        <div>Cart Details</div>
        <div className="row">
          <table>
            <tbody className="col-sm-12">
              <tr className="col-sm-12">
                <td className="col-sm-6">{cartQuantity} item(s):</td>
                <td className="col-sm-6">${runningTotal}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Tip</td>
                <td className="col-sm-6">${cartTip}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Delivery Fee:</td>
                <td className="col-sm-6">$5.00</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Tax:</td>
                <td className="col-sm-6">${cartTax}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Estimated Total:</td>
                <td className="col-sm-6"> ${cartTotal}</td>
              </tr>
            </tbody>
          </table>
        <div>
          <button>Edit Tip</button>
        </div>
        <div>
          <button>Checkout</button>
        </div>

        </div>
      </div>
    )
  }
}

export default connect( state => ({ cart:state.cart}) )(CartDetails)

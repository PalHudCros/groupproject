import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {getCart, putCart, updateTotals} from '../../ducks/cartDuck.js';

class CartDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: props.cart
    }
  }
  
  componentWillMount(){
    this.props.dispatch(getCart())

  }

  componentWillReceiveProps(props){

    this.setState({
      cart: props.cart
    })


  }

  componentDidMount(){
  }
  render(){

    return(
      <div>
        <div>Cart Details</div>
        <div className="row">
          <table>
            <tbody className="col-sm-12">
              <tr className="col-sm-12">
                <td className="col-sm-6">{this.state.cart.totals.cartQuantity} item(s):</td>
                <td className="col-sm-6">${this.state.cart.totals.subTotal}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Tip</td>
                <td className="col-sm-6">${this.state.cart.totals.cartTip}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Delivery Fee:</td>
                <td className="col-sm-6">$5.00</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Tax:</td>
                <td className="col-sm-6">${this.state.cart.totals.cartTax}</td>
              </tr>
              <tr className="col-sm-12">
                <td className="col-sm-6">Estimated Total:</td>
                <td className="col-sm-6"> ${this.state.cart.totals.cartTotal}</td>
              </tr>
            </tbody>
          </table>
        <div>
          <button>Edit Tip</button>
        </div>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ cart:state.cart}) )(CartDetails)

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Link from 'valuelink';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import { getCart, putCart  } from '../../ducks/cartDuck.js';

class ShoppingCart extends Component{
  constructor(props){
    super(props)
    this.state = {
      cart: {
        cart:[],
        runningTotal:0
      }
    }
  }

  componentWillMount(){
    this.props.dispatch(getCart())
  }

  componentWillReceiveProps(props){
    this.setState({
      cart:props.cart
    })
  }

  handleQuantityUpdate(wineItem, index,  event){

    const deepLink = Link.state( this, 'cart' ).at( 'cart' ).at(index).at( 'quantity' );
    let something = parseInt(event.target.value)
    deepLink.set( something );

    setTimeout(()=>{
      this.props.dispatch(putCart({cart:this.state.cart.cart}))
    }, 1)

  }

  render(){

    let currentCart = this.state.cart.cart.map((ele, index) => {
      return (
          <TableRow key={ele.item}>
            <TableRowColumn style={{width:'60%'}}>{ele.name}</TableRowColumn>
            <TableRowColumn style={{width:'20%'}}>{ele.price}</TableRowColumn>
            <TableRowColumn style={{width:'20%'}}>
              <TextField
                key={index}
                value={ele.quantity}
                type="number"
                min="0"
                style={{width:'100%'}}
                onChange={this.handleQuantityUpdate.bind(this, ele.item, index )}
              >
              </TextField>
              </TableRowColumn>
          </TableRow>

      )
    })
    return(
      <div>
        <div>Shopping Cart</div>
        <Table selectable={false} multiSelecable={false}>
          <TableBody displayRowCheckbox={false}>
            {currentCart}
          </TableBody>
        </Table>

      </div>
    )
  }
}

export default connect( state => ({ cart:state.cart }) )(ShoppingCart)

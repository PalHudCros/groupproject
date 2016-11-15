import React from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CartDetails from '../../container/CartDetails/CartDetails.jsx';
import ShoppingCart from '../../container/ShoppingCart/ShoppingCart';

function Cart(props){
  let areItemsInCart = !!props.cart.cart.length;
    if (areItemsInCart) {
    return(<div className="container">
            <div className="row">
              <div className="col-sm-8">
                <MuiThemeProvider>
                  <Paper style={style}>
                    <ShoppingCart></ShoppingCart>
                  </Paper>
                </MuiThemeProvider>
              </div>
              <div className="col-sm-4" style={{paddingLeft:10}}>
                <MuiThemeProvider>
                  <Paper style={style}>
                    <CartDetails></CartDetails>
                      <div>
                        <Link to="/checkout">
                          <button>Checkout</button>
                        </Link>
                      </div>
                  </Paper>
                </MuiThemeProvider>
              </div>
            </div>
          </div>)
  } else {
     return(<div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1>Please add something to your cart, or sign in.</h1>
                </div>
              </div>
            </div>)
  }

}
const style = {
  height: 'auto',
  marginTop:20,
  width:'100%',
  textAlign: 'center',
  display: 'inline-block',
};

export default connect(state => ({cart: state.cart}))(Cart)

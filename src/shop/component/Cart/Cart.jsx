import React from 'react';
import { Link } from "react-router";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CartDetails from '../../container/CartDetails/CartDetails.jsx';
import ShoppingCart from '../../container/ShoppingCart/ShoppingCart';



export default function Cart(props){
  return(
    <div className="container">
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
            </Paper>
          </MuiThemeProvider>
        </div>

      </div>
    </div>
  )
}
const style = {
  height: 'auto',
  marginTop:20,
  width:'100%',
  textAlign: 'center',
  display: 'inline-block',
};

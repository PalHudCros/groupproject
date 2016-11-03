import React from 'react';
import {Link} from "react-router";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function Cart(){
  return(
    <div className="container">
      <h2>Cart</h2>
      <div className="row">
        <div className="col-sm-8">
          <MuiThemeProvider>
            <Paper style={style}>
              is there anything inside of this
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Paper>
          </MuiThemeProvider>
        </div>
        <div className="col-sm-4" style={{paddingLeft:10}}>
          <MuiThemeProvider>
            <Paper style={style}>
              is there anything inside of this
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Paper>
          </MuiThemeProvider>
        </div>

      </div>
    </div>
  )
}
const style = {
  height: 100,
  marginTop:20,
  width:'100%',
  textAlign: 'center',
  display: 'inline-block',
};

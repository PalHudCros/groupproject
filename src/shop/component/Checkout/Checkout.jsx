import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CartDetails from "../../container/CartDetails/CartDetails.jsx";
import {login} from '../../ducks/userDuck.js';


class Checkout extends Component{
  constructor(props){
    super(props)


      this.state={
        cart:props.cart
      }
    // if(props.user.status !== "Logged In" && !localStorage.getItem('id_token')) this.props.dispatch(login())
  console.log(this.state.cart);
  }
  componentWillMount(){
    // this.setState({
    //   cart:{this.props.cart}
    // }, ()=>{console.log(this.props.cart);})
  }

  componentWillReceiveProps(props){

  }

  render(){

    return(
    <div>
        {
          localStorage.getItem('id_token')
          ?
          <div style={{display:'flex', justifyContent: 'center'}}><h1> PLEASE LOG IN</h1></div>
          :
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-12">
                      <MuiThemeProvider>
                        <Paper style={style}>
                          <div className="row">
                            <div className="col-sm-10 col-sm-offset-1" style={{display:'flex', justifyContent:'space-around'}}>
                              <span><TextField hintText="First Name"/></span>
                              <span><TextField hintText="Last Name"/></span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-10 col-sm-offset-1" style={{display:'flex', justifyContent:'space-around'}}>
                              <span><TextField hintText="Address" style={{width:'100%'}}/></span>
                              <span><TextField hintText="City" style={{width:'90%'}}/></span>
                              <span><TextField hintText="State" style={{width:'50%'}}/></span>
                              <span><TextField hintText="Zip"style={{width:'50%'}}/></span>
                            </div>
                          </div>
                        </Paper>
                      </MuiThemeProvider>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <MuiThemeProvider>
                        <Paper style={style}>
                          <div className="row">
                            <div className="col-sm-10 col-sm-offset-1" style={{display:'flex', justifyContent:'space-around'}}>
                              <span><TextField hintText="Credit Card Company"/></span>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-10 col-sm-offset-1" style={{display:'flex', justifyContent:'space-around'}}>
                              <span><TextField hintText="Credit Cart Number" style={{width:'100%'}}/></span>
                              <span><TextField hintText="Expiration" style={{width:'90%'}}/></span>
                              <span><TextField hintText="Zip" style={{width:'90%'}}/></span>
                            </div>
                          </div>
                        </Paper>
                      </MuiThemeProvider>
                    </div>
                  </div>
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
          </div>
        }
    </div>
    )
  }
}

const style = {
  height: 'auto',
  marginTop:20,
  width:'100%',
  textAlign: 'center',
  display: 'inline-block',
};

export default connect( state => ({ cart: state.cart, user: state.user}))(Checkout)

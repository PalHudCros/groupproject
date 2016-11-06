import './SingleWine.scss'

import React, { Component } from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

//Async functions
import {postCart} from '../../ducks/cartDuck'

class SingleWine extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentWine: {
        Retail:{Price:0}
      },
      wines: {
      },
      quantity:1
    }
  }

  componentWillMount(){
    if (this.props.wines.wines.length > 0) {
        const wines = this.props.wines.wines
        this.setState({wines:wines})
        const currentWine = this.props.wines.wines.filter(ele => ele.Id == this.props.params.wineId)[0];
        this.setState({currentWine: currentWine})
    }
  }

  componentWillReceiveProps(props) {
    this.setState({wines: props.wines.wines})
    const currentWine = props.wines.wines.filter(ele => ele.Id == props.params.wineId)[0];
    this.setState({currentWine: currentWine})
  }

  handleChange(event){
    this.setState({
      quantity: event.target.value
    });
  }

  handleAddToInventory(){
    console.log('handleAddToInventory', this.state.quantity)
    let wine = {
      item: this.state.currentWine._id
      , quantity: this.state.quantity
      , price: this.state.currentWine.Retail.Price
    }
    this.props.dispatch(postCart(wine))
  }

  render(){
    console.log(this.state.currentWine);
    return (
      <div className="container">
        <h1>{this.state.currentWine.Id}</h1>
          <MuiThemeProvider>
          <Card style={{display:'flex', justifyContent:'center'}}>
            <div className="row">
              <div className="col-xs-6">
                <CardMedia>
                  <div className="single-bottle-img">
                    <img src={this.state.currentWine.BottleImage} style={{height:200}} />
                  </div>
                </CardMedia>
              </div>
              <div className="col-xs-6">
                <CardTitle title={this.state.currentWine.Name} />
                <div style={{paddingLeft:16, paddingRight:16}}>
                   <h3>{`Price: ${this.state.currentWine.Retail.Price}`}</h3>
                   <h3>{`Qty: ${this.state.currentWine.Quantity}`}</h3>
                   <CardActions>
                    <TextField type="number" min="1" id="numberToCart" value={this.state.quantity} onChange={this.handleChange.bind(this)}></TextField>
                    <FlatButton label="Add" onClick={this.handleAddToInventory.bind(this)}/>
                   </CardActions>
                </div>
              </div>
            </div>


          </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default connect(state => ({wines: state.wines, cart:state.cart}))(SingleWine)

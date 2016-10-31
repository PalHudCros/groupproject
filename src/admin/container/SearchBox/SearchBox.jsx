import React, { Component } from "react";
import TextField from 'material-ui/TextField';


export default class SearchBox extends Component{
  constructor(){
    super()

    this.state = {
      value:"Search"
    }
  }
  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }
  render(){
    return(
      <TextField
      id="text-field-controlled"
      value={this.state.value}
      onChange={this.handleChange.bind(this)}
      />
    )
  }
}

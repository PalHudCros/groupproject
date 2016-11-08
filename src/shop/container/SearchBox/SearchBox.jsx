import React, { Component } from "react";
import TextField from 'material-ui/TextField';


export default class SearchBox extends Component{
  constructor(){
    super()

    this.state = {
      value: "Search"
    }
  }
  handleChange(event){
    // this.setState({
    //   value: event.target.value
    // });
  }
  render(){
    return(
      <TextField
      id="text-field-controlled"
      onChange={this.handleChange.bind(this)}
      floatingLabelText="Search for Wine"
      floatingLabelStyle={{ color: "#f15047" }}
      floatingLabelFocusStyle={{ color: "#ef4036" }}
      hintStyle={{ color: "#ef4036" }}
      underlineStyle={{ borderColor: "#e2e2e2" }}
      underlineFocusStyle={{ borderColor: "#ef4036" }}
      />
    )
  }
}

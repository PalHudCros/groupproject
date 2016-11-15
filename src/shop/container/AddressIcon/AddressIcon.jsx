import React, { Component } from 'react'
import RoomIcon from 'material-ui/svg-icons/action/room';



export default class AddressIcon extends Component{
  constructor(){
    super()
    this.state = {
      location:"211 N Ervay St #900, Dallas, TX 75201"
      , location2: "Enter Address"
    }
  }

  render(){
    return(
      <span className="address-icon shop">
        <RoomIcon
          style={{width: 20, height: 20, color: "#17d6b2"}}
          ></RoomIcon>
        <span className="address-box shop">{this.state.location}</span>
      </span>
    )
  }
}

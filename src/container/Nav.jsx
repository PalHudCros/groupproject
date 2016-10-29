import React, { Component } from "react";
import SuperNav from "./SuperNav";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw"
  }
  , button: {
      color:'red'
  }
}

export default class Nav extends Component{
  render(){
    return (
      <div>
        <SuperNav></SuperNav>
        <nav style={ styles.nav }>
          <button style={ styles.button }>Home</button>
          <button style={ styles.button }>About</button>
          <button style={ styles.button }>Contact</button>
        </nav>
      </div>

    )
  }

}

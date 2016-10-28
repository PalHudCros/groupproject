import React from "react";


const styles = {
  nav: {
    display: "flex"
  }
  , button: {
      color:'red'
  }
}

export default function Nav(){
  return (
    <nav style={styles.nav}>
      <button style={styles.button}>Home</button>
      <button style={styles.button}>About</button>
      <button style={styles.button}>Contact</button>
    </nav>
  )
}

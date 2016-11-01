import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'

export default function Shop(props) {

  return (
      <div>
        <div className="container">
          <div className="row">
            
          </div>
          <div className="row">
            <div className="col-sm-3 ctrlPnl-container"  style={{border: 'solid 1px black', backgroundColor:'grey'}}>
              control panel
            </div>
            <div className="col-sm-9 store-container"  style={{border: 'solid 1px black', backgroundColor:'grey'}}>
              store
            </div>
          </div>
        </div>
      </div>
  )
}

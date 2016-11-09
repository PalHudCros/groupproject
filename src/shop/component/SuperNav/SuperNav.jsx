import React from 'react';

import UserIcon from "../../container/UserIcon/UserIcon"
import AddressIcon from "../../container/AddressIcon/AddressIcon"

export default function SuperNav(){
  return(
    <div className="col-xs-10 col-xs-offset-1 shop">
      <div className="supernav shop">
        <div className="col-xs-2 shop">Your personal Semolia</div>
        <div className="col-xs-4 shop">
          <div style={{display:'flex', justifyContent:'flex-end'}}>
          <AddressIcon></AddressIcon>
          <UserIcon></UserIcon>
          </div>
          </div>
      </div>
    </div>
  );
}

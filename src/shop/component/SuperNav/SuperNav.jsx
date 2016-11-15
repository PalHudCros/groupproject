import React from 'react';
import UserIcon from "../../container/UserIcon/UserIcon"
import AddressIcon from "../../container/AddressIcon/AddressIcon"

export default function SuperNav(){
  return(
    <div className="row supernav shop">
        <div className="col-xs-offset-1 col-xs-2 slogan-wrapper shop">
          <p>Your Personal <span>Sommelier</span></p>
        </div>
        <div className="col-xs-offset-4 col-xs-3 address-wrapper shop">
          <AddressIcon></AddressIcon>
        </div>
        <div className="col-xs-1 user-icon-wrapper shop">
          <UserIcon></UserIcon>
        </div>
    </div>
  );
}

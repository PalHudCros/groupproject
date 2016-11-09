import React from 'react';
import UserIcon from "../../container/UserIcon/UserIcon"
import AddressIcon from "../../container/AddressIcon/AddressIcon"

export default function SuperNav(){
  return(
    <div className="row supernav shop">
        <div className="col-xs-offset-2 col-xs-2 shop">
          <p>Your Personal Sommelier</p>
        </div>
        <div className="col-xs-offset-2 col-xs-3 shop">
          <AddressIcon></AddressIcon>
        </div>
        <div className="col-xs-1 shop">
          <UserIcon></UserIcon>
        </div>
    </div>
  );
}

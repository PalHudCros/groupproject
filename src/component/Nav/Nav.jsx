import "!style!css!sass!./Nav.scss"
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

export default function Nav(){
  return(
    <div className="col-xs-10 col-xs-offset-1">
      <div style={{display:"flex", justifyContent:'space-between'}}>
        <span>Logo of sorts</span>
        <span>
          <FlatButton
            label="Wine"
          />
          <SearchBox></SearchBox>
          <FlatButton
            label="Cart"
            href="#"
            icon={<ActionShoppingCart></ActionShoppingCart>}
          />
        </span>
      </div>
    </div>
  );
}

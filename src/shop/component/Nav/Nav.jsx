import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Link, browserHistory} from "react-router";

export default function Nav(){

  return(
    <div className="col-xs-10 col-xs-offset-1 shop">
      <div style={{display:"flex", justifyContent:'space-between'}}>
        <span>Logo of sorts</span>
        <span>
          <Link to="/shop">
            <FlatButton
              label="Wine"
            >
            </FlatButton>
          </Link>
          <SearchBox></SearchBox>
          <Link to="/cart">
            <FlatButton
              label="Cart"
              icon={<ActionShoppingCart></ActionShoppingCart>}
            >
            </FlatButton>
          </Link>
        </span>
      </div>
    </div>
  );
}

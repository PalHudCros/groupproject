import "./Nav.scss";
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Link} from "react-router";

export default function Nav(){
  return(
    <div className="col-xs-10 col-xs-offset-1">
      <div style={{display:"flex", justifyContent:'space-between'}}>
        <span>Logo of sorts</span>
        <span>
          <FlatButton
            label="Wine"
          >
            <Link to="/shop"></Link>
          </FlatButton>

          <SearchBox></SearchBox>
          <FlatButton
            label="Cart"
            icon={<ActionShoppingCart></ActionShoppingCart>}
          >
            <Link to="/cart"></Link>
          </FlatButton>
        </span>
      </div>
    </div>
  );
}

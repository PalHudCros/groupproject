import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import SearchBox from "../../container/SearchBox/SearchBox";
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Link, browserHistory} from "react-router";

export default function Nav(){

  return(
    <div className="nav shop">

      <div className="col-md-offset-2 col-md-1">
        <h1>LOGO</h1>
      </div>

      <div className="col-md-2">
        <Link to="/shop">
          <FlatButton
            label="Wine"
            >
          </FlatButton>
        </Link>
      </div>

      <div className="col-md-3">
        <SearchBox></SearchBox>
      </div>

      <div className="col-md-3">
        <Link to="/cart">
          <FlatButton
            label="Cart"
            labelStyle={{ color: "#7b7b7d" }}
            icon={<ActionShoppingCart
              color="#7b7b7d"
              hoverColor="#7b7b7d"
              ></ActionShoppingCart>}
              >
            </FlatButton>
          </Link>
      </div>


    </div>
  );
}

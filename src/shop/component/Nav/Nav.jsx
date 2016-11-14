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

      <div className="col-md-offset-2 col-md-2 logo-wrapper shop">
        <h1>Fero Vino</h1>
      </div>

      <div className="col-md-2 col-md-offset-2 wine-button shop">
        <Link to="/shop">
          <FlatButton
            label="Wines"
            rippleColor="#ef4036"
            labelStyle={{ color: "#7b7b7d" }}
            hoverColor="rgba(123, 123, 125, .2)"
            >
          </FlatButton>
        </Link>
      </div>

      <div className="col-md-2 searchbar-wrapper shop">
        <SearchBox></SearchBox>
      </div>

      <div className="col-md-1 shopping-cart-button-wrapper shop">
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

//Shop Index

//Styles
import "../styles/all.scss"
//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//Components
import App from "./component/App/App";
import Shop from "./component/Shop/Shop";
import Home from "./component/Home/Home";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Error from "./component/Error/Error";
import SingleWine from "./component/SingleWine/SingleWine";

//Store
import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

// profile path
// featured-wines path
// popular-wins path

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App } path="/">
          <IndexRoute component={ Home }></IndexRoute>
          <Route component={ Shop } path="shop"></Route>
          <Route component={SingleWine} path="shop/:wineId"></Route>
          <Route component={ Cart } path="cart"></Route>
          <Route component={ Checkout } path="checkout"></Route>
          <Route component={ Error } path="*"></Route>
        </Route>
      </Router>
    </Provider>
    ,
      reactNode
  );
})

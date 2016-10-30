//Styles
import "./styles/all.scss"

//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";

//Components
import Shop from "./shop/component/Shop/Shop";
import Home from "./shop/component/Home/Home";
import Store from "./shop/component/Store/Store";

import Admin from "./admin/component/Admin/Admin";
import Driver from "./driver/component/Driver/Driver";

import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ Shop } path="/">
          <IndexRoute component={ Home }></IndexRoute>
          <Route component={ Store } path="store"></Route>
{/*          <Route component={ Cart } path="cart"></Route>
          <Route component={ Checkout } path="checkout"></Route> */}
        </Route>
        <Route component={ Admin } path="admin"></Route>
        <Route component={ Driver } path="driver"></Route>
      </Router>
    </Provider>
    ,
      reactNode
  );
})

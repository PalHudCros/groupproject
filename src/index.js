import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import App from "./container/App";
import store from "./store";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App } path="/">
          <Route path="home"></Route>
          <Route path="shop"></Route>
          <Route path="cart"></Route>
          <Route path="checkout"></Route>
          <Route path="admin"></Route>
        </Route>
      </Router>
    </Provider>
    ,
      reactNode
  );
})

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./container/App";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    // <Provider>
      <Router history={browserHistory}>
        <Route component={App} path="/"></Route>
      </Router>
    // </Provider>
    ,
      reactNode
  );
})

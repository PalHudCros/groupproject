//Styles
import "./styles/all.scss"

//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";

//Components
import App from "./component/App/App";
import store from "./store";
import Admin from "./component/Admin/Admin";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route component={ App } path="/"></Route>
        <Route component={ Admin } path="/admin"></Route>

        
      </Router>
    </Provider>
    ,
      reactNode
  );
})

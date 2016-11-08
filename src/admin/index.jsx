// Admin Index

// Styles
import "../styles/all.scss"

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Components
import AdminPanel from './component/AdminPanel/AdminPanel.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import APIContent from './container/APIContent/APIContent.jsx';
import DistributorContent from './container/DistributorContent/DistributorContent.jsx';
import InStockContent from './container/InStockContent/InStockContent.jsx';
import Drivers from './component/Drivers/Drivers.jsx';
import Customers from './component/Customers/Customers.jsx';
import Error from './component/Error/Error.jsx'
// Store
import store from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(

    <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route component={ AdminPanel } path="/">
        <IndexRoute component={ Dashboard }></IndexRoute>
        <Route component={ Inventory } path="/inventory/api">
          <IndexRoute component={ APIContent }></IndexRoute>
          <Route component={ DistributorContent } path="/inventory/distributor"></Route>
          <Route component={ InStockContent } path="/inventory/instock">
          </Route>
        </Route>
        <Route component={ Drivers } path="drivers">
        </Route>
        <Route component={ Customers } path="customers">
        </Route>
        <Route component={Error} path="*"></Route>
      </Route>

    </Router>
    </Provider>

  ,  reactNode
  )
} )

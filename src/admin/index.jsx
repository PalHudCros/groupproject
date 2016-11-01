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
import Dashboard from './component/Dashboard/Dashboard.jsx';
import DashboardContent from './component/DashboardContent/DashboardContent.jsx';
import InventoryContent from './component/InventoryContent/InventoryContent.jsx';
import DriversContent from './component/DriversContent/DriversContent.jsx';
import CustomersContent from './component/CustomersContent/CustomersContent.jsx';

// Store
import store from "./store.js";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route component={ Dashboard } path="/">

      <IndexRoute component={ DashboardContent }></IndexRoute>

      <Route component={ InventoryContent } path="inventory">
      </Route>
      <Route component={ DriversContent } path="drivers">
      </Route>
      <Route component={ CustomersContent } path="customers">
      </Route>
    </Route>

    </Router>
    </Provider>
  ,  reactNode
  )
} )

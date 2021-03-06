// Driver Index

// Styles
import "../styles/all.scss";

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// Components
import Dashboard from './component/Dashboard/Dashboard.jsx';
import QueueContent from './component/QueueContent/QueueContent.jsx';
import OrdersContent from './component/OrdersContent/OrdersContent.jsx';
import MapContent from './container/MapContent/MapContent.jsx';
import Error from './component/Error/Error.jsx'

// Store
import store from './store.js';

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
    <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route component={ Dashboard } path="/">
        <IndexRoute component={ QueueContent }></IndexRoute>
        <Route component={ MapContent } path="map"></Route>
        <Route component={Error} path="*"></Route>
      </Route>
    </Router>

    </Provider>
    ,  reactNode
  );
} )

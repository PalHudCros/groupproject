//Styles
import "../styles/all.scss"
//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('react-node');

  ReactDOM.render(
  <div><h1>driver</h1></div>
  ,  reactNode
  )
} )

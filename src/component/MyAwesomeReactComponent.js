import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from "../container/Nav"

const MyAwesomeReactComponent = () => (
  <div>
  <Nav></Nav>
  <RaisedButton label="Default" />
  </div>
);

export default MyAwesomeReactComponent;

// This is the wrong way to write a 'dumb' component.

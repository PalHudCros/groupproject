import React, {Component} from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";


export default class InStockContent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillReceiveProps( props ) {

  }

  render() {

    return (

      <div className="inventory-content-inner-wrapper admin">

        <h2>Welcome to the world-famous Tab Three!</h2>

      </div>

    );
  }

}

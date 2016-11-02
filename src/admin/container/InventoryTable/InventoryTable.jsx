import React, {Component} from 'react';
import { Link } from 'react-router';

export default class InventoryTable extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <nav className="col-xs-12 dashboardcontent admin">
        </nav>
    );

  }

}

const dummyWines = [
  {
    name: "Pinot Grigio"
    , price: "199.99"
    , qty: 0
  }
  , {
    name: "Chardonnay"
    , price: "59.99"
    , qty: 0
  }
  , {
    name: "Malbec"
    , price: "109.99"
    , qty: 0
  }
  , {
    name: "Reisling"
    , price: "9.99"
    , qty: 0
  }
  , {
    name: "Champagne"
    , price: "79.99"
    , qty: 0
  }
  , {
    name: "Zinfardel"
    , price: "19.99"
    , qty: 0
  }
];

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

      <div className="inventory-table-wrapper admin">

        <div className="row inventory-filters-wrapper admin">


          <div className="col-xs-3 admin">
            <p>Filter by Smell</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Usefulness</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Strangeity</p>
          </div>
          <div className="col-xs-3 admin">
            <p>Filter by Potency of Corruption</p>
          </div>

        </div>

        <div className="inventory-rows-wrapper admin">



          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
          <div className="row inventory-row admin">


          </div>
        </div>

      </div>


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

import React, {Component} from 'react';
import {Link} from "react-router";
import AutoComplete from 'material-ui/AutoComplete';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
      <div>
        <AutoComplete
          floatingLabelText="Search Inventory"
          filter={AutoComplete.fuzzyFilter}
          dataSource={ wineCategories }
          maxSearchResults={5}
        />
      </div>

    );
  }

}

const wineCategories = [ "Cabernet Sauvignon", "Chardonnay", "Pinot Noir", "White Blends", "Red Blends", "Sauvignon Blanc", "Merlot", "Syrah", "Shiraz", "Pinot Grigio", "Pinot Gris", "Riesling", "Malbec", "Dessert", "Sherry", "Port", "Moscato", "Zinfandel", "Primitivo", "Sangiovese", "Red", "White", "Rose", "Sparkling", "Champagne" ];

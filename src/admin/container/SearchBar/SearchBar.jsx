import React, {Component} from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import {getWinesFromAPI} from "../../ducks/distributionDuck";
import {getWinesFromInventory} from "../../ducks/inventoryDuck";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
  console.log( props );
    this.state = {
      wineCategories: props.distribution.categories
    };
  }

  componentWillMount() {

  }

  componentWillReceiveProps(props) {
    
  }

  handleNewRequest(item) {
    if ( window.location.pathname === "/inventory/api" ) {
      this.props.dispatch(getWinesFromAPI(item._id));
    } else if ( window.location.pathname === "/inventory/distributor" ) {
      this.props.dispatch(getWinesFromInventory(item._id));
    }
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Search API"
          filter={AutoComplete.fuzzyFilter}
          dataSource={ this.state.wineCategories }
          dataSourceConfig={ {text: "varietal", value: "_id"} }
          maxSearchResults={5}
          onNewRequest={this.handleNewRequest.bind(this)}
        />
      </div>

    );
  }

}

export default connect(state => ( { inventory: state.inventory, distribution: state.distribution, tabs: state.tabs } ) )( SearchBar );

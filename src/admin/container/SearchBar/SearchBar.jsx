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
      search: ""
      , wineCategories: props.distribution.categories
    };
  }

  componentWillMount() {

  }

  componentWillReceiveProps(props) {
    console.log( props );
  }

  handleUpdateInput( textSearch, dataSourceArr ) {
    console.log( textSearch );
    this.setState( { search: textSearch } );
  }

  handleNewRequest( query ) {
    console.log( "query", typeof query );
    if ( window.location.pathname === "/inventory/api" ) {
        this.props.dispatch(getWinesFromAPI(query));
    } else if ( window.location.pathname === "/inventory/distributor" ) {
      this.props.dispatch(getWinesFromInventory(item));
      //inventoryDuck
    }
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Search API"
          filter={ AutoComplete.fuzzyFilter }
          dataSource={ this.state.wineCategories }
          dataSourceConfig={ {text: "varietal", value: "_id"} }
          maxSearchResults={5}
          onUpdateInput={ this.handleUpdateInput.bind(this) }
          onNewRequest={this.handleNewRequest.bind(this)}
          floatingLabelStyle={{ color: "#ef4036" }}
          underlineStyle={{ borderColor: "#e2e2e2" }}
          underlineFocusStyle={{ borderColor: "#ef4036" }}
        />
      </div>

    );
  }

}

export default connect(state => ( { inventory: state.inventory, distribution: state.distribution, tabs: state.tabs } ) )( SearchBar );

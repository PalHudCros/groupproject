import React, {Component} from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import {getWinesFromAPI} from "../../ducks/inventoryDuck"

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wineCategories: []
      , wineCategoriesConfig: {text: "varietal", value: "id"}
    };
  }

  componentWillMount() {
    const wineCategories = this.props.inventory.categories.map(category => category);
    this.setState({wineCategories: wineCategories});
  }

  componentWillReceiveProps(props) {
  }

  handleNewRequest(item) {
    this.props.dispatch(getWinesFromAPI(item.id));    
  }

  render() {

    return (
      <div>
        <AutoComplete
          floatingLabelText="Search API"
          filter={AutoComplete.fuzzyFilter}
          dataSource={ this.state.wineCategories }
          dataSourceConfig={ this.state.wineCategoriesConfig }
          maxSearchResults={5}
          onNewRequest={this.handleNewRequest.bind(this)}
        />
      </div>

    );
  }

}
export default connect(state => ( { inventory: state.inventory } ) )( SearchBar );
import React, {Component} from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import {getWinesFromAPI} from "../../ducks/distributionDuck";
import {getWinesFromInventory} from "../../ducks/inventoryDuck";


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wineCategories: []
      , wineCategoriesConfig: {text: "varietal", value: "_id"}
    };
  }

  componentWillMount() {
    if (this.props.tabs.whichTab === 1) {
      this.setState({wineCategories: this.props.distribution.categories});
    } else if (this.props.tabs.whichTab === 2) {
      this.setState({wineCategories: this.props.inventory.categories});      
    }
  }

  componentWillReceiveProps(props) {
    if (props.tabs.whichTab === 1) {
      this.setState({wineCategories: props.distribution.categories});
    } else if (props.tabs.whichTab === 2) {
      this.setState({wineCategories: props.inventory.categories});      
    }
  }

  handleNewRequest(item) {
    console.log("This Tab: ", this.props.tabs.whichTab)
    if (this.props.tabs.whichTab === 1) {
      this.props.dispatch(getWinesFromAPI(item._id));
    } else if (this.props.tabs.whichTab === 2) {
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
          dataSourceConfig={ this.state.wineCategoriesConfig }
          maxSearchResults={5}
          onNewRequest={this.handleNewRequest.bind(this)}
        />
      </div>

    );
  }

}
export default connect(state => ( { inventory: state.inventory, distribution: state.distribution, tabs: state.tabs } ) )( SearchBar );
import React, {Component} from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import {getWinesFromAPI} from "../../ducks/distributionDuck";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wineCategories: []
      , wineCategoriesConfig: {text: "varietal", value: "_id"}
    };
  }

  componentWillMount() {
    this.setState({wineCategories: this.props.distribution.categories});
  }

  componentWillReceiveProps(props) {
    this.setState({wineCategories: props.distribution.categories})
    console.log("Categories: ", props.distribution.categories)
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
export default connect(state => ( { inventory: state.inventory, distribution: state.distribution } ) )( SearchBar );
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';


export class SearchBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      search: "Search for wine"
      , wineCategories: props.wine.categories
    };
  }
  handleNewRequest(query) {
    if ( query ) {
      this.props.dispatch( getWines(query) );
      if ( window.location.pathname !== "/shop" ) {
        browserHistory.push( "/shop" );
      }
    } else {
      this.setState( { search: "Please enter a search term" } );
    }
  }
  render(){
    return(
      <AutoComplete
        floatingLabelText="Search API"
        filter={AutoComplete.fuzzyFilter}
        dataSource={ this.state.wineCategories }
        dataSourceConfig={ {text: "varietal", value: "_id"} }
        maxSearchResults={5}
        onNewRequest={this.handleNewRequest.bind(this)}
        hintText={ this.state.search }
        hintStyle={{ color: "#ef4036" }}
        underlineStyle={{ borderColor: "#e2e2e2" }}
        underlineFocusStyle={{ borderColor: "#ef4036" }}
      />
    )
  }
}

export default connect( state => {
  return { tabs: state.tabs };
} )( SearchBox );

import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';


export class SearchBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      search: "Search for wine"
      , wineCategories: this.props.wine.categories
    };
  }

  handleUpdateInput() {

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
    )
  }
}

export default connect( state => {
  return { wine: state.wine };
} )( SearchBox );

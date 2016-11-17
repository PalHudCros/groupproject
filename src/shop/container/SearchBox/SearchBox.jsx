import React, { Component } from "react";
import { connect } from "react-redux";
import AutoComplete from 'material-ui/AutoComplete';
import { getWines, getWinesByText } from "../../ducks/wineDuck";
import { browserHistory } from "react-router";

export class SearchBox extends Component{
  constructor(props){
    super(props);

    this.state = {
      search: "Search for wine"
      , wineCategories: props.wines.categories
    };
  }

  componentWillReceiveProps(props) {
    this.setState( { wineCategories: props.wines.categories } );
  }

  componentWillMount() {
  }

  handleUpdateInput( textSearch, dataSourceArr ) {
    this.setState( { search: textSearch } );
  }

  handleNewRequest(query) {
    if ( query._id ) {
      this.props.dispatch( getWines(query) );
      if ( window.location.pathname !== "/shop" ) {
        browserHistory.push( "/shop" );
      }      
    } else if (typeof query === "string") {
      console.log("string");
      this.props.dispatch(getWinesByText(query));
    }
  }
  render() {
    return(
      <AutoComplete
        hintText="Search for Wines"
        hintStyle={{ color: "rgba(238, 64, 54, .3)" }}
        textFieldStyle={{ width: "80%" }}
        filter={ AutoComplete.fuzzyFilter }
        dataSource={ this.state.wineCategories }
        dataSourceConfig={ {text: "varietal", value: "_id"} }
        maxSearchResults={5}
        onUpdateInput={ this.handleUpdateInput.bind(this) }
        onNewRequest={this.handleNewRequest.bind(this)}
        floatingLabelStyle={{ color: "#ef4036" }}
        underlineStyle={{ borderColor: "rgba(238, 64, 54, .5)" }}
        underlineFocusStyle={{ borderColor: "#ef4036" }}
      />
    )
  }
}

export default connect( state => {
  return { wines: state.wines };
} )( SearchBox );

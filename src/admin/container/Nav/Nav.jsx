import React, {Component} from 'react';
import {connect} from "react-redux";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link, browserHistory} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: []
    };
  }

  handleActiveTab(tab) {
    browserHistory.push( tab.props['data-route'] );
  }

  howManyTabTitles(props) {

    const howManyTabs = [];

    for ( let i = 0; i < props.tabs.titles.length; i++ ) {
      howManyTabs.push( (
        <Tab key={ i }
        label={ props.tabs.titles[i] }
        onActive={ this.handleActiveTab.bind(this) }
        data-route={ props.tabs.routes[i] }
        style={{color: "#484d56"}}
        className="nav-tab admin"
        />
      ) );
    }

  this.setState({tabs: howManyTabs});
  }

  componentWillReceiveProps(props) {
    this.howManyTabTitles(props);
  }


  render() {

  return (
    <Tabs
      className="nav-tab-container admin"
      tabItemContainerStyle={{backgroundColor: "#ffffff", height: "95%"}}
      inkBarStyle={{ backgroundColor: "#ec423d" }}
      >
    { this.state.tabs }
    </Tabs>
  );

  }
}


export default connect( state => {
  return { tabs: state.tabs };
} )( Nav );

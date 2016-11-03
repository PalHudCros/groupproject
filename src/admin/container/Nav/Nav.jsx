import React, {Component} from 'react';
import {connect} from "react-redux";
import {setTabTitles} from "../../ducks/tabsDuck.jsx";
import {whichTabIsActive} from "../../ducks/tabsDuck.jsx";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: []
      , whichTab: 1
    };
  }

  handleActiveTab(tabNum) {
    console.log( "Active Tab: ", tabNum );
    this.props.dispatch( whichTabIsActive(tabNum) );
  }

  howManyTabTitles(props) {
    const howManyTabs = props.tabs.titles.map( ( tabTitle, index ) => {

      return (
        <Tab key={ index }
        label={ tabTitle }
        onActive={ this.handleActiveTab.bind(this, index + 1) }
        style={{color: "#484d56"}}
        className="nav-tab admin"
        />
    );
  } );
  this.setState({tabs: howManyTabs});
  }


  componentWillMount(props) {

  }

  componentWillReceiveProps(props) {
    console.log( "HMMM", props );
    this.howManyTabTitles(props);
  }


  render() {

  return (
    <Tabs
      className="nav-tab-container admin"
      tabItemContainerStyle={{backgroundColor: "#ffffff", height: "95%"}}
      >
    { this.state.tabs }
    </Tabs>
  );

  }
}


export default connect( state => {
  return { tabs: state.tabs };
} )( Nav );

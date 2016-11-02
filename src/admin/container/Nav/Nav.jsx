import React, {Component} from 'react';
import {connect} from "react-redux";
import {setTabTitles} from "../../ducks/tabsDuck.jsx";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

export class Nav extends Component {
  constructor(props) {
    super(props);
    console.log( props );

    this.state = {
      tabs: []
    };
  }

  getTabTitles(props) {
    const howManyTabs = props.tabs.titles.map( ( tabTitle, index ) => {

      return (
        <Tab key={ index }
          icon={<FontIcon
            style={{color: "#484d56"}}
            className="material-icons">phone</FontIcon>
        }
        label={ tabTitle }
        style={{color: "#484d56"}}
        />
    );
  } );
  console.log( howManyTabs );
  this.setState({tabs: howManyTabs});
  console.log( this.state.tabs );
  }

  componentWillMount(props) {
    console.log( this.props );
    this.getTabTitles(this.props);
  }

  componentWillReceiveProps(props) {
    console.log("Received props:", props)
    this.getTabTitles(props);
  }


  render() {

  return (
    <Tabs
      inkBarStyle={{backgroundColor: "#ec423d"}}
      contentContainerStyle={{color: "blue"}}
      tabItemContainerStyle={{backgroundColor: "#ffffff"}}
      tabTemplateStyle={{color: "green"}}
      >
    { this.state.tabs }
    </Tabs>
  );

  }
}


export default connect( state => {
  return { tabs: state.tabs };
} )( Nav );

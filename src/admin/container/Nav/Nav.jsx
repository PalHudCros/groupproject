import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

export default function Nav(props) {

  return (
    <Tabs
      inkBarStyle={{backgroundColor: "#ec423d"}}
      contentContainerStyle={{color: "blue"}}
      tabItemContainerStyle={{backgroundColor: "#ffffff"}}
      tabTemplateStyle={{color: "green"}}
      >
      <Tab
        icon={<FontIcon
        style={{color: "#484d56"}}
        className="material-icons">phone</FontIcon>}
        label="RECENTS"
        style={{color: "#484d56"}}
        />
      <Tab
        icon={<FontIcon
        color="#484d56"
        className="material-icons">favorite</FontIcon>}
        label="FAVORITES"
        style={{color: "#484d56"}}
        />
      <Tab
        icon={<MapsPersonPin
            color="#484d56"
           />}
        label="NEARBY"
        style={{color: "#484d56"}}
        />
    </Tabs>
  );
}

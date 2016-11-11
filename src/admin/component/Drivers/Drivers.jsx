import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DriverMap from "../../container/DriverMap/DriverMap.jsx";
// import DriverMap2 from "../../container/DriverMap/DriverMap2.jsx";
import DriverList from "../../container/DriverList/DriverList"


export default function DriversContent(props) {

  return (
      <nav className="row driverscontent admin">

        <DriverList />
        <DriverMap></DriverMap>
 
      </nav>
  );

}

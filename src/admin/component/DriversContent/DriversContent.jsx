import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DriverMap from "../../container/DriverMap/DriverMap.jsx";

export default function DriversContent(props) {

  return (
      <nav className="row driverscontent admin">
        
        <DriverMap></DriverMap>

      </nav>
  );

}

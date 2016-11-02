import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WineList from '../../container/WineList/WineList';

export default function AdminContent(props) {

  return (
      <nav className="col-xs-12 inventorycontent admin">
        <h1>Inventory Route</h1>
         <WineList />
      </nav>
  );

}

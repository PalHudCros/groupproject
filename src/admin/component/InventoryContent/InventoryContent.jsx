import React from 'react';
import { Link } from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import InventoryTable from "../../container/InventoryTable/InventoryTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WineList from '../../container/WineList/WineList';

export default function InventoryContent(props) {

  return (

    <div className="inventory-content-wrapper admin">

      <header className="row header-wrapper admin">

        <div className="col-xs-offset-4 col-xs-4 h1-wrapper admin">
          <h1>Manage Inventory</h1>
        </div>

      </header>

      <div className="row searchbar-wrapper admin">

        <div className="col-xs-4 admin">
          <MuiThemeProvider>
            <SearchBar></SearchBar>
          </MuiThemeProvider>
        </div>

      </div>

        <MuiThemeProvider>
          <InventoryTable></InventoryTable>
        </MuiThemeProvider>

    </div>
  );

}

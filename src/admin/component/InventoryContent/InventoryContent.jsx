import React from 'react';
import { Link } from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import InventoryTable from "../../container/InventoryTable/InventoryTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function InventoryContent(props) {

  return (
      <nav className="row inventorycontent admin">

        <div className="col-xs-12 admin">
          <h1 className="admin">Manage Inventory</h1>
        </div>

        <MuiThemeProvider>
          <SearchBar></SearchBar>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <InventoryTable></InventoryTable>
        </MuiThemeProvider>

      </nav>
  );

}

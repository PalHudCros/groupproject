import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import SearchBar from "../../container/SearchBar/SearchBar.jsx";
import APITable from "../../container/APITable/APITable.jsx";
import DistributorTable from "../../container/DistributorTable/DistributorTable.jsx";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ApiWineStage from "../../container/ApiWineStage/ApiWineStage";
import DistributorWineStage from "../../container/DistributorWineStage/DistributorWineStage";
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {getWinesFromAPI} from "../../ducks/distributionDuck";
import {getWinesFromInventory} from "../../ducks/inventoryDuck";

export default function Inventory( props ) {

    return (

        <div className="inventory-content-outer-wrapper admin">

          { props.children }
          
        </div>
    );

}
